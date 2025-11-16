"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-yellow-100 flex flex-col">
      
      {/* 🔹 Header atas */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center space-x-2">
            <img
              src="logo.jpeg"
              className="w-36"
            />
            <h1 className="text-xl font-semibold hidden sm:block">
              Indomaret Mini
            </h1>
          </div>
          <nav className="space-x-6 font-medium">
            <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
            <Link href="/promo" className="hover:text-yellow-300 transition">Promo</Link>
            <Link href="/tentang" className="hover:text-yellow-300 transition">Tentang</Link>
            <Link href="/login" className="hover:text-yellow-300 transition">Login</Link>
          </nav>
        </div>
      </header>

      {/* 🔸 Banner Promo (kelip-kelip sudah dihapus) */}
      <div className="bg-yellow-400 text-blue-900 font-semibold py-2 text-center">
        🎉 Promo Snack Hari Ini! Diskon 10% untuk Oreo Original 🍪
      </div>

      {/* 🔹 Konten utama */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-4 drop-shadow-md">
          Selamat Datang di <span className="text-yellow-500">Indomaret Mini</span> 🏪
        </h2>

        <p className="text-gray-700 max-w-lg mb-8 leading-relaxed">
          Belanja kebutuhan sehari-hari jadi lebih mudah, cepat, dan hemat 💸  
          Yuk nikmati pengalaman belanja online yang praktis dan menyenangkan!
        </p>

        <Link
          href="/indomaret"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300"
        >
          🚀 Mulai Belanja Sekarang
        </Link>
      </main>

      {/* 🔹 Footer */}
      <footer className="bg-blue-600 text-white py-3 text-sm text-center">
        © 2025 Indomaret Mini — Belanja Praktis, Hemat, & Cepat 💙
      </footer>
    </div>
  );
}
