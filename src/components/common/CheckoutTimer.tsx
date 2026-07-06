import React, { useState, useEffect } from "react";

interface CheckoutTimerProps {
  /**
   * Durasi awal hitung mundur dalam satuan detik.
   * Default: 3055 detik (setara dengan 00:50:55)
   */
  initialSeconds?: number;
  /**
   * Callback fungsi ketika waktu hitung mundur telah habis
   */
  onTimeUp?: () => void;
}

const CheckoutTimer: React.FC<CheckoutTimerProps> = ({
  initialSeconds = 3055,
  onTimeUp,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onTimeUp) onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  // Format detik menjadi Jam, Menit, dan Detik
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="w-full bg-[#FEE8D2CC] py-3 px-4 flex items-center justify-center gap-3 sm:gap-4 select-none  ">
      {/* Teks Label */}
      <span className="text-xs md:text-base font-medium text-gray-600">
        Selesaikan pemesanan dalam
      </span>

      {/* Kontainer Angka Timer */}
      <div className="flex items-center gap-1.5 text-sm md:text-base font-bold">
        {/* Kotak Jam */}
        <div className="w-8 h-8 md:w-9 md:h-9 bg-[#FF451D] text-white rounded-md flex items-center justify-center shadow-sm">
          {hours}
        </div>

        <span className="text-[#FF451D] font-bold">:</span>

        {/* Kotak Menit */}
        <div className="w-8 h-8 md:w-9 md:h-9 bg-[#FF451D] text-white rounded-md flex items-center justify-center shadow-sm">
          {minutes}
        </div>

        <span className="text-[#FF451D] font-bold">:</span>

        {/* Kotak Detik */}
        <div className="w-8 h-8 md:w-9 md:h-9 bg-[#FF451D] text-white rounded-md flex items-center justify-center shadow-sm">
          {seconds}
        </div>
      </div>
    </div>
  );
};

export default CheckoutTimer;
