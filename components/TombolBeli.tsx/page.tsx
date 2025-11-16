"use client"
import { useState } from "react"

export default function TombolBeli() {
  const [dibeli, setDibeli] = useState(false)

  return (
    <button
      onClick={() => setDibeli(true)}
      className={`${
        dibeli
          ? "bg-green-600"
          : "bg-[#0053A0] hover:bg-[#004080]"
      } text-white px-4 py-2 rounded-lg active:scale-95 transition-all`}
    >
      {dibeli ? "✅ Sudah dibeli" : "🛒 Beli"}
    </button>
  )
}
