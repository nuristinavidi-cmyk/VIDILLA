"use client";

import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-10 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Terima Kasih!
        </h1>
        <p className="text-gray-700 mb-6">
          Pesanan kamu sudah diproses. Silakan tunggu konfirmasi selanjutnya 😊
        </p>
        <button
          onClick={() => router.push("/indomaret")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Belanja Lagi
        </button>
      </div>
    </div>
  );
}
