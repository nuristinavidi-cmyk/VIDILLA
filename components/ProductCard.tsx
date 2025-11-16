"use client";

export default function ProductCard({ name, price, image, onAdd }: any) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-28 h-28 object-contain mb-3"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-blue-600 font-bold">Rp {price.toLocaleString()}</p>
      <button
        onClick={onAdd}
        className="mt-3 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        + Tambah
      </button>
    </div>
  );
}
