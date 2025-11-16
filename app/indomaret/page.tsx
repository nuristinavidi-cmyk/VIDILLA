"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

// ====== TOAST ======
const Toast = ({ message, show }: { message: string; show: boolean }) => (
  <div
    className={`fixed top-20 right-5 bg-green-500 text-white px-4 py-2 rounded shadow transition-all duration-300 ${
      show ? "opacity-100" : "opacity-0"
    }`}
  >
    {message}
  </div>
);

// ====== MODAL DETAIL PRODUK ======
const Modal = ({
  show,
  onClose,
  product,
  onAdd,
}: {
  show: boolean;
  onClose: () => void;
  product: { name: string; price: number; image: string; category: string; discount?: number } | null;
  onAdd: () => void;
}) => {
  if (!show || !product) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded p-6 w-80 md:w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-700 font-bold text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 md:h-80 object-contain mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        {product.discount ? (
          <p className="mb-4 text-lg">
            Harga: <span className="line-through">Rp {product.price.toLocaleString()}</span>{" "}
            <span className="text-red-600 font-bold">
              Rp {(product.price * (1 - product.discount)).toLocaleString()}
            </span>
          </p>
        ) : (
          <p className="mb-4 text-lg">Harga: Rp {product.price.toLocaleString()}</p>
        )}
        <button
          onClick={onAdd}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 text-lg"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
};

// ====== MODAL KASIR ======
const KasirModal = ({
  cart,
  total,
  onClose,
}: {
  cart: { name: string; price: number }[];
  total: number;
  onClose: () => void;
}) => {
  const [bayar, setBayar] = useState(0);
  const kembalian = bayar - total;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 w-80 md:w-96 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Kasir Mini 🏧</h2>
        <div className="mb-2 max-h-60 overflow-y-auto">
          {cart.map((item, i) => (
            <p key={i}>
              {item.name} - Rp {item.price.toLocaleString()}
            </p>
          ))}
        </div>
        <p className="font-extrabold text-xl mt-2 text-blue-700">Total: Rp {total.toLocaleString()}</p>

        <input
          type="number"
          placeholder="Masukkan uang bayar"
          className="border rounded w-full px-3 py-2 mt-3"
          value={bayar}
          onChange={(e) => setBayar(Number(e.target.value))}
        />

        <button
          className="mt-2 w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 font-bold"
          onClick={() => setBayar(total)}
        >
          Bayar Pas
        </button>

        {bayar > 0 && (
          <p
            className={`mt-3 font-bold text-lg transition-all ${
              bayar >= total ? "text-green-600 animate-pulse" : "text-red-600"
            }`}
          >
            {bayar >= total
              ? `Kembalian: Rp ${(bayar - total).toLocaleString()}`
              : `Kurang Rp ${(total - bayar).toLocaleString()}`}
          </p>
        )}

        <div className="flex justify-between mt-4">
          <button
            className={`bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 ${
              bayar >= total ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={bayar < total}
            onClick={() => {
              alert("Transaksi berhasil! Terima kasih 😊");
              onClose();
            }}
          >
            Konfirmasi
          </button>
          <button
            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
            onClick={onClose}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

// ====== HALAMAN UTAMA ======
export default function IndomaretPage() {
  const [cart, setCart] = useState<{ name: string; price: number; image: string }[]>([]);
  const [search, setSearch] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | {
    name: string;
    price: number;
    image: string;
    category: string;
    discount?: number;
  }>(null);
  const [showModal, setShowModal] = useState(false);
  const [showKasir, setShowKasir] = useState(false);

  // Fly-to-cart animation
  const [flyingImg, setFlyingImg] = useState<string | null>(null);
  const [flyPos, setFlyPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleFlyToCart = (e: React.MouseEvent, img: string) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setFlyPos({ x: rect.left, y: rect.top });
    setFlyingImg(img);
    setTimeout(() => setFlyingImg(null), 1000);
  };

  // Semua produk
  const products = [
    { name: "Indomie Goreng", price: 3500, image: "indomie jumbo.jpg", category: "Makanan Instan" },
    { name: "Mie Sedaap Goreng", price: 3800, image: "sedap grg.jpg", category: "Makanan Instan" },
    { name: "Supermi Ayam Bawang", price: 3500, image: "Supermi Rasa Ayam bawang.jpg", category: "Makanan Instan" },
    { name: "Sarimi Goreng", price: 3000, image: "SARIMI DUO GORENG AYAM KREMES.jpg", category: "Makanan Instan" },
    { name: "Pop Mie Pedas", price: 8000, image: "POP MIE.jpg", category: "Makanan Instan" },
    { name: "Teh Botol Sosro", price: 6000, image: "Teh botol Sosro.jpg", category: "Minuman" },
    { name: "Aqua Botol 600ml", price: 5000, image: "aqua 600.jpg", category: "Minuman" },
    { name: "Oreo Original", price: 8000, image: "Oreo Original.jpg", category: "Snack", discount: 0.1 },
    { name: "Chitato Sapi Panggang", price: 12000, image: "chitato.jpg", category: "Snack" },
    { name: "Taro Net", price: 9000, image: "Taro Net.jpg", category: "Snack" },
    { name: "Qtela Singkong", price: 8500, image: "Qtela.jpg", category: "Snack" },
    { name: "SilverQueen Coklat", price: 15000, image: "SILVER QUEEN.jpg", category: "Coklat" },
    { name: "Gudang Garam Surya 12", price: 25000, image: "rokok surya 12.jpg", category: "Rokok" },
    { name: "Djarum Super 12", price: 24000, image: "djarum.png", category: "Rokok" },
    { name: "Marlboro Merah 20", price: 40000, image: "malboro.jpg", category: "Rokok" },
    { name: "Sabun Lifebuoy", price: 4500, image: "Lifebuoy Sabun.jpg", category: "Kebutuhan Harian" },
    { name: "Shampoo Sunsilk", price: 9000, image: "sampo.jpg", category: "Kebutuhan Harian" },
    { name: "Pasta Gigi Pepsodent", price: 12000, image: "PROMO PEPSODENT.jpg", category: "Kebutuhan Harian" },
    { name: "Tabung Gas", price: 21000, image: "gas.jpg", category: "Kebutuhan Harian" },
    { name: "Galon Aqua", price: 22000, image: "Galon.jpg", category: "Kebutuhan Harian" },
  
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (product: { name: string; price: number; image: string }) => {
    setCart([...cart, product]);
    setToastMessage(`${product.name} berhasil ditambahkan!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Navbar />
      <Toast message={toastMessage} show={showToast} />

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        product={selectedProduct}
        onAdd={() => {
          if (selectedProduct) addToCart(selectedProduct);
          setShowModal(false);
        }}
      />

      {showKasir && <KasirModal cart={cart} total={total} onClose={() => setShowKasir(false)} />}

      {/* Banner Promo Utama */}
      <div className="w-full bg-yellow-400 text-black font-bold p-4 text-center rounded mb-6 animate-pulse">
        🎉 Promo Snack Hari Ini: Diskon 10% untuk Oreo Original!
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          🏪 Selamat Datang di Indomaret Mini
        </h1>

        {/* Search */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-1/2"
          />
        </div>

        {/* Banner Kategori Mini */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer hover:scale-105 transition">🥤 Minuman</div>
          <div className="bg-purple-500 text-white px-3 py-1 rounded cursor-pointer hover:scale-105 transition">🍫 Coklat</div>
          <div className="bg-orange-500 text-white px-3 py-1 rounded cursor-pointer hover:scale-105 transition">🍜 Makanan Instan</div>
          <div className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:scale-105 transition">🍪 Snack</div>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p, i) => (
            <div key={i} className="overflow-hidden rounded shadow hover:scale-105 transform transition duration-300">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
              <div className="p-3">
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Rp {p.discount ? (p.price * (1 - p.discount)).toLocaleString() : p.price.toLocaleString()}
                </p>
                <button
                  onClick={(e) => {
                    addToCart(p);
                    handleFlyToCart(e, p.image);
                  }}
                  className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 text-sm"
                >
                  🛒 Beli
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Keranjang */}
      <div className="fixed bottom-5 right-5 bg-white p-4 rounded shadow-lg w-64 z-50">
        <h3 className="font-bold mb-2">🛒 Keranjang</h3>
        <p>Total Item: {cart.length}</p>
        <p>Total Harga: Rp {total.toLocaleString()}</p>
        {cart.length > 0 && (
          <div className="flex justify-between mt-2">
            <button
              onClick={() => setShowKasir(true)}
              className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
            >
              Bayar Sekarang
            </button>
            <button
              onClick={() => setCart([])}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Reset
            </button>
          </div>
        )}
      </div>

      {/* Fly to cart animation */}
      {flyingImg && (
        <img
          src={flyingImg}
          alt="flying"
          className="fixed w-20 h-20 object-contain rounded-full shadow-lg z-50 transition-transform duration-1000 ease-in-out"
          style={{
            top: flyPos.y,
            left: flyPos.x,
            transform: "translate(500px, 500px) scale(0.2)",
            transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      )}

      {/* Footer */}
      <div className="bg-blue-900 text-white text-center p-4 mt-10 rounded-t">
        © 2025 Indomaret Mini. Semua hak cipta dilindungi.
      </div>
    </div>
  );
}
