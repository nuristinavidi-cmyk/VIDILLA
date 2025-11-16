"use client";

import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [showPromo, setShowPromo] = useState(false);

  const products = [
    {
      name: "Indomie Mi Goreng",
      discount: "50%",
      img: "/Indomie Jumbo.JPg",
      price: "Rp3.500",
    },
    {
      name: "Pop Mie Rasa Kari Ayam",
      discount: "35%",
      img: "/Pop Mie kari Ayam.jpg",
      price: "Rp5.000",
    },
    {
      name: "Bumbu Racik Rendang",
      discount: "40%",
      img: "/bumbu racik.jpg",
      price: "Rp2.500",
    },
  ];

  return (
    <main className="px-6 py-10">
      {/* Banner Gambar */}
      <div className="w-full flex justify-center mb-6">
        <Image
          src="/baner.png" // ganti sesuai nama file bannermu di folder /public
          alt="Banner Promo Indofood"
          width={1000}
          height={300}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* Bagian teks promo */}
      <div className="text-center py-8 bg-gradient-to-b from-yellow-50 to-white rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-blue-700">
          Promo Spesial Minggu Ini 🎉
        </h2>
        <p className="text-gray-600 mt-2">
          Nikmati diskon hingga <span className="font-semibold">50%</span> untuk produk pilihan.
          Jangan sampai ketinggalan!
        </p>
        <button
          onClick={() => setShowPromo(!showPromo)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all"
        >
          {showPromo ? "Sembunyikan Promo" : "Lihat Produk Promo"}
        </button>
      </div>

      {/* Daftar Produk Promo */}
      {showPromo && (
        <div className="mt-10">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
            🎊 Daftar Produk Promo Minggu Ini 🎊
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 text-center transition-all"
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-3"
                />
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-green-600 font-bold mt-1">
                  Diskon {p.discount}
                </p>
                <p className="text-gray-700 mt-2">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
