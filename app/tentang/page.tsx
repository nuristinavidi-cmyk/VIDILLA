export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-white to-blue-50 p-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center drop-shadow-md">
        🏪 Tentang Indomaret Mini
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6 text-justify max-w-3xl mx-auto">
        Indomaret Mini adalah toko serba ada yang selalu dekat dengan masyarakat.
        Kami menyediakan berbagai kebutuhan sehari-hari mulai dari makanan,
        minuman, hingga produk rumah tangga dengan harga yang terjangkau. 
        Visi kami adalah <strong>“Mudah & Hemat”</strong> untuk setiap pelanggan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-yellow-400">
          <h2 className="text-lg font-semibold text-yellow-600">✨ Visi</h2>
          <p className="text-gray-600 mt-2">
            Menjadi toko ritel pilihan utama masyarakat Indonesia.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-green-400">
          <h2 className="text-lg font-semibold text-green-600">🎯 Misi</h2>
          <p className="text-gray-600 mt-2">
            Memberikan pelayanan terbaik, produk lengkap, dan harga bersahabat.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-red-400">
          <h2 className="text-lg font-semibold text-red-600">🤝 Layanan</h2>
          <p className="text-gray-600 mt-2">
            Belanja cepat, nyaman, dan selalu dekat dengan Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
