"use client";

import { useState } from "react";

export default function IndomaretPage() {
  const [category, setCategory] = useState("semua");

  // Data produk contoh
  const products = [
    { id: 1, name: "Indomie Goreng", price: "Rp 3.500", category: "makanan", image: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/3/38f6f9a1-8f9a-4ed7-8f19-2c236b0c19a0.jpg" },
    { id: 2, name: "Teh Botol Sosro", price: "Rp 5.000", category: "minuman", image: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/15/3cce00f3-63ef-49a3-96f2-7f5ab70a9c44.jpg" },
    { id: 3, name: "Aqua Botol 600ml", price: "Rp 4.000", category: "minuman", image: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/11/7/af6e7b07-04cf-497d-a3b5-4c073a3bcbe1.jpg" },
    { id: 4, name: "Promo: SilverQueen", price: "Rp 12.000", category: "promo", image: "https://images.tokopedia.net/img/cache/500-square/product-1/2020/6/17/8465563/8465563_a21f4ac3-dbd1-44a3-bb9f-835aa9d01619.jpg" },
  ];

  const filteredProducts =
    category === "semua"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Indomaret</h1>
        <nav>
          <button
            className="mx-2 hover:underline"
            onClick={() => setCategory("semua")}
          >
            Semua
          </button>
          <button
            className="mx-2 hover:underline"
            onClick={() => setCategory("makanan")}
          >
            Makanan
          </button>
          <button
            className="mx-2 hover:underline"
            onClick={() => setCategory("minuman")}
          >
            Minuman
          </button>
          <button
            className="mx-2 hover:underline"
            onClick={() => setCategory("promo")}
          >
            Promo
          </button>
        </nav>
      </header>

      {/* Content */}
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          {category === "semua"
            ? "Semua Produk"
            : category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-3 hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-2 w-full bg-yellow-400 text-black py-1 rounded-md hover:bg-yellow-500 transition">
                Beli Sekarang
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
