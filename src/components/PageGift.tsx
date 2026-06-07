import { useState } from "react";
import bgPanjang from "../assets/25DK702-BG-ALL.jpg";
import ornamentRumah from "../assets/25DK702-RUMAH-DAYAK-MERAH.png";
import bankBRI from "../assets/BANK-BRI-1.png";
import chipATM from "../assets/chip-atm-1-2-1-1-1-1.png";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { weddingConfig } from "../weddingConfig";

export const PageGift: React.FC = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRef = useScrollReveal();
  const { bankAccount, giftShipping } = weddingConfig.gift;

  const handleCopy = () => {
    navigator.clipboard.writeText(bankAccount.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgPanjang})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundColor: "#621419",
      }}>
      <div className="w-full flex flex-col items-center px-5 pt-10 pb-12 gap-6">
        <div
          className="w-full flex flex-col items-center py-6 px-5 gap-6 rounded-[20px]"
          style={{
            backgroundColor: "rgba(87,11,16,0.8)",
            border: "4px double #F8BB63",
            boxShadow: "0 0 10px 6px rgba(0,0,0,0.2) inset",
          }}>
          <img
            src={ornamentRumah}
            alt="Ornament"
            className="reveal w-[70%] max-w-[250px]"
          />

          <h2
            className="reveal text-[#F8BB63] text-[36px] font-normal"
            style={{ fontFamily: "Philosopher, sans-serif" }}>
            Wedding Gift
          </h2>

          <p
            className="reveal text-white text-[13px] text-center leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}>
            Doa restu Anda merupakan
            <br />
            karunia yang sangat berarti bagi kami, dan jika memberi adalah
            ungkapan tanda kasih, Anda dapat memberi kado secara cashless.
          </p>

          <button
            onClick={() => setShowAccount(!showAccount)}
            className="reveal flex items-center gap-2 text-black text-[14px] font-medium px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #F8BB63 0%, #D48E28 100%)",
              fontFamily: "Poppins, sans-serif",
            }}>
            <svg viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
            </svg>
            Klik di sini
          </button>
        </div>

        {showAccount && (
          <div className="w-full flex flex-col gap-6 mt-4">
            {/* Bank Card */}
            <div
              className="w-full flex flex-col items-center rounded-[20px] p-6 gap-4"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}>
              <div className="w-full flex justify-between items-start gap-4">
                {" "}
                <img
                  src={chipATM}
                  alt="Chip ATM"
                  className="w-[60px] h-[60px]"
                />{" "}
                <img
                  src={bankBRI}
                  alt="BANK BRI"
                  className="w-[100px] h-auto"
                />{" "}
              </div>{" "}
              <p
                className="text-black text-[18px] font-semibold"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                {" "}
                {bankAccount.accountNumber.substring(0, 8)}xxxxx{" "}
              </p>{" "}
              <p
                className="text-black text-[16px]"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                {" "}
                {bankAccount.accountName}{" "}
              </p>{" "}
              <button
                onClick={handleCopy}
                className="self-end flex items-center gap-2 text-gray-600 text-[12px] font-medium px-4 py-2 rounded-[8px] hover:opacity-90 transition-opacity"
                style={{
                  border: "1px solid #ccc",
                  fontFamily: "Poppins, sans-serif",
                }}>
                {" "}
                <svg
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="w-4 h-4">
                  {" "}
                  <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z" />{" "}
                </svg>{" "}
                {copied ? "Berhasil disalin" : "Copy"}{" "}
              </button>
            </div>
            {/* Gift Shipping Card */}
            <div
              className="w-full flex flex-col items-center rounded-[20px] p-6 gap-4"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}>
              <svg viewBox="0 0 512 512" fill="#333" className="w-12 h-12">
                {" "}
                <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z" />{" "}
              </svg>{" "}
              <p
                className="text-black text-[20px] font-semibold"
                style={{ fontFamily: "Philosopher, sans-serif" }}>
                {" "}
                Kirim Hadiah{" "}
              </p>{" "}
              <div className="w-full flex flex-col gap-2 text-left">
                {" "}
                <p
                  className="text-black text-[13px]"
                  style={{ fontFamily: "Poppins, sans-serif" }}>
                  {" "}
                  Nama Penerima : {giftShipping.recipientName}{" "}
                </p>{" "}
                <p
                  className="text-black text-[13px]"
                  style={{ fontFamily: "Poppins, sans-serif" }}>
                  {" "}
                  Nomor HP : {giftShipping.phoneNumber}{" "}
                </p>{" "}
                <p
                  className="text-black text-[13px]"
                  style={{ fontFamily: "Poppins, sans-serif" }}>
                  {" "}
                  Alamat Kirim Hadiah : {giftShipping.address}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        )}
      </div>
    </section>
  );
};
