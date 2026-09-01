import React, { useState, useEffect } from 'react';
import bgPanjang from '../assets/bg_utama.png';
import ornamentDayak from '../assets/25DK702-DAYAK.png';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface Comment {
  id?: string;
  name: string;
  message: string;
  attendance: string;
  createdAt?: Timestamp;
}

export const PageUcapan: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useScrollReveal();

  // Fetch comments from Firebase on component mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsRef = collection(db, 'comments');
        const q = query(commentsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const commentsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Comment[];
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message && attendance) {
      setLoading(true);
      try {
        await addDoc(collection(db, 'comments'), {
          name: name.trim(),
          message: message.trim(),
          attendance,
          createdAt: serverTimestamp(),
        });
        setName('');
        setMessage('');
        setAttendance('');
        // Refresh comments
        const commentsRef = collection(db, 'comments');
        const q = query(commentsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const commentsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Comment[];
        setComments(commentsData);
      } catch (error) {
        console.error('Error adding comment:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const attendanceCount = comments.reduce(
    (acc, comment) => {
      if (comment.attendance === 'Hadir') acc.hadir++;
      else if (comment.attendance === 'Tidak Hadir') acc.tidakHadir++;
      return acc;
    },
    { hadir: 0, tidakHadir: 0 }
  );

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgPanjang})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundColor: '#621419',
      }}
    >
      <img src={ornamentDayak} alt="Ornament" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-[40%] max-w-[200px] mt-4" />
      <div className="w-full flex flex-col items-center px-5 pt-10 pb-12 gap-6 my-7">
        <div
          className="w-full flex flex-col items-center py-16 px-5 gap-6 rounded-[20px]"
          style={{
            backgroundColor: 'rgba(87,11,16,0.8)',
            border: '4px double #F8BB63',
            boxShadow: '0 0 10px 6px rgba(0,0,0,0.2) inset',
          }}
        >
          <h2
            className="text-[#F8BB63] text-[36px] font-normal"
            style={{ fontFamily: 'Philosopher, sans-serif' }}
          >
            Doa dan Ucapan
          </h2>

          <p
            className="text-white text-[13px] text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Berikan ucapan harapan dan do'a kepada kedua mempelai
          </p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 text-black text-[14px] font-medium px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
            style={{
              backgroundImage: 'linear-gradient(180deg, #F8BB63 0%, #D48E28 100%)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4">
              <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z" />
            </svg>
            {comments.length} Comments
          </button>
        </div>

        {showForm && (
          <div
            className="w-full flex flex-col items-center py-6 px-5 gap-6 rounded-[20px]"
            style={{
              backgroundColor: 'rgba(87,11,16,0.8)',
              border: '4px double #F8BB63',
              boxShadow: '0 0 10px 6px rgba(0,0,0,0.2) inset',
            }}
          >

        {/* Attendance Count */}
        <div className="flex gap-4 w-full justify-center">
          <div
            className="flex flex-col items-center px-6 py-3 rounded-[8px]"
            style={{ backgroundColor: '#3D9A62' }}
          >
            <span className="text-white text-[24px] font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {attendanceCount.hadir}
            </span>
            <span className="text-white text-[12px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Hadir
            </span>
          </div>
          <div
            className="flex flex-col items-center px-6 py-3 rounded-[8px]"
            style={{ backgroundColor: '#d90a11' }}
          >
            <span className="text-white text-[24px] font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {attendanceCount.tidakHadir}
            </span>
            <span className="text-white text-[12px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Tidak Hadir
            </span>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-[8px] text-[13px]"
            style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              fontFamily: 'Poppins, sans-serif',
            }}
          />
          <textarea
            placeholder="Ucapan"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={3}
            className="w-full px-4 py-3 rounded-[8px] text-[13px] resize-none"
            style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              fontFamily: 'Poppins, sans-serif',
            }}
          />
          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-[8px] text-[13px]"
            style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <option value="" disabled>
              Konfirmasi Kehadiran
            </option>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-[8px] text-white text-[14px] font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundImage: 'linear-gradient(180deg, #F8BB63 0%, #D48E28 100%)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {loading ? 'Mengirim...' : 'Kirim'}
          </button>
        </form>

        {/* Comments List */}
        {comments.length > 0 && (
          <div className="w-full flex flex-col gap-4 mt-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="w-full p-4 rounded-[8px]"
                style={{
                  backgroundColor: 'rgba(87,11,16,0.8)',
                  border: '2px solid #F8BB63',
                }}
              >
                <p
                  className="text-[#F8BB63] text-[14px] font-semibold mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {comment.name}
                </p>
                <p
                  className="text-white text-[13px] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {comment.message}
                </p>
                <span
                  className={`text-[12px] px-3 py-1 rounded-[4px] ${
                    comment.attendance === 'Hadir'
                      ? 'text-white'
                      : 'text-white'
                  }`}
                  style={{
                    backgroundColor: comment.attendance === 'Hadir' ? '#3D9A62' : '#d90a11',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {comment.attendance}
                </span>
              </div>
            ))}
          </div>
        )}
        </div>
        )}
      </div>
    </section>
  );
};
