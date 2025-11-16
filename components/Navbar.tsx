"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="indmrt.png"
          alt="Logo Indomaret"
          className="h-8"
        />
        <span className="font-bold text-lg">Indomaret Mini</span>
      </div>

      {/* Menu */}
      <div className="space-x-6 font-medium">
        <Link href="/indomaret" className="hover:text-yellow-300 transition">
          Home
        </Link>
        <Link href="/promo" className="hover:text-yellow-300 transition">
          Promo
        </Link>
        <Link href="/tentang" className="hover:text-yellow-300 transition">
          Tentang
        </Link>
        <Link href="/login" className="hover:text-yellow-300 transition">
          Login
        </Link>
      </div>
    </nav>
  );
}
