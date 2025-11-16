"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CartItem {
  name: string;
  price: number;
  image: string;
}

export default function KasirPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [bayar, setBayar] = useState<number>(0);

  // Ambil keranjang dari localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const kembalian = bayar - total;

  const handleKonfirmasi = () => {
    alert("Transaksi berhasil! Terima kasih 😊");
    setCart([]);
    localStorage.removeItem("cart");
    router.push("/"); // kembali ke halaman utama
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Kasir Indomaret Mini</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-700">Keranjang kosong 😢</p>
      ) : (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <div className="mb-4 max-h-64 overflow-y-auto">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span>Rp {item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>

          <p className="text-xl font-bold mb-3">Total: Rp {total.toLocaleString()}</p>

          <input
            type="number"
            placeholder="Masukkan uang bayar"
            className="border rounded w-full px-3 py-2 mb-2"
            value={bayar}
            onChange={(e) => setBayar(Number(e.target.value))}
          />

          <button
            className="w-full bg-yellow-400 text-black py-2 rounded mb-2 hover:bg-yellow-500 font-bold"
            onClick={() => setBayar(total)}
          >
            Bayar Pas
          </button>

          {bayar > 0 && (
            <p
              className={`text-lg font-bold mb-4 ${
                bayar >= total ? "text-green-600 animate-pulse" : "text-red-600"
              }`}
            >
              {bayar >= total
                ? `Kembalian: Rp ${(bayar - total).toLocaleString()}`
                : `Kurang Rp ${(total - bayar).toLocaleString()}`}
            </p>
          )}

          <div className="flex justify-between">
            <button
              className={`px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 ${
                bayar < total ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={bayar < total}
              onClick={handleKonfirmasi}
            >
              Konfirmasi
            </button>
            <button
              className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
              onClick={() => router.push("/")}
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
 