import { useState, useEffect, useCallback } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useWedding } from '../context/WeddingContext';

export interface TamuUndangan {
  id?: string;
  name: string;
  phone?: string;
  isVip?: boolean;
  notes?: string;
  createdAt?: Timestamp;
}

interface UseTamuUndanganReturn {
  tamuList: TamuUndangan[];
  loading: boolean;
  addTamu: (tamu: Omit<TamuUndangan, 'id' | 'createdAt'>) => Promise<void>;
  updateTamu: (id: string, data: Partial<TamuUndangan>) => Promise<void>;
  deleteTamu: (id: string) => Promise<void>;
  refetch: () => Promise<void>;
  /** Menghasilkan link undangan untuk tamu tertentu */
  generateLink: (tamuName: string, baseUrl?: string) => string;
}

/**
 * Hook untuk mengelola daftar tamu undangan di:
 *   Firestore → weddings/{slug}/tamu_undangan
 *
 * Digunakan untuk membuat & mengelola daftar tamu per client.
 * Gunakan di halaman admin / panel pengelola.
 */
export const useTamuUndangan = (): UseTamuUndanganReturn => {
  const { slug } = useWedding();
  const [tamuList, setTamuList] = useState<TamuUndangan[]>([]);
  const [loading, setLoading] = useState(true);

  const getTamuRef = useCallback(() => {
    // weddings/{slug}/tamu_undangan
    return collection(db, 'weddings', slug, 'tamu_undangan');
  }, [slug]);

  const fetchTamu = useCallback(async () => {
    if (!slug) return;
    try {
      setLoading(true);
      const q = query(getTamuRef(), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as TamuUndangan[];
      setTamuList(data);
    } catch (err) {
      console.error('[useTamuUndangan] Gagal fetch tamu:', err);
    } finally {
      setLoading(false);
    }
  }, [slug, getTamuRef]);

  useEffect(() => {
    fetchTamu();
  }, [fetchTamu]);

  const addTamu = useCallback(
    async (tamu: Omit<TamuUndangan, 'id' | 'createdAt'>) => {
      if (!slug) throw new Error('Slug tidak ditemukan');
      await addDoc(getTamuRef(), {
        ...tamu,
        createdAt: serverTimestamp(),
      });
      await fetchTamu();
    },
    [slug, getTamuRef, fetchTamu],
  );

  const updateTamu = useCallback(
    async (id: string, data: Partial<TamuUndangan>) => {
      const ref = doc(db, 'weddings', slug, 'tamu_undangan', id);
      await updateDoc(ref, data);
      await fetchTamu();
    },
    [slug, fetchTamu],
  );

  const deleteTamu = useCallback(
    async (id: string) => {
      const ref = doc(db, 'weddings', slug, 'tamu_undangan', id);
      await deleteDoc(ref);
      await fetchTamu();
    },
    [slug, fetchTamu],
  );

  /**
   * Menghasilkan URL undangan personal untuk seorang tamu.
   * Contoh output: https://domain.com/indra-july?to=budi-santoso
   */
  const generateLink = useCallback(
    (tamuName: string, baseUrl?: string): string => {
      const origin = baseUrl ?? window.location.origin;
      const slug_path = slug ? `/${slug}` : '';
      const nameSlug = tamuName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      return `${origin}${slug_path}?to=${nameSlug}`;
    },
    [slug],
  );

  return {
    tamuList,
    loading,
    addTamu,
    updateTamu,
    deleteTamu,
    refetch: fetchTamu,
    generateLink,
  };
};
