"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem("isLoggedIn", "true")
    router.push("/dashboard")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f4f6f9]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-200">
        {/* Logo Indomaret */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/indomaret-logo.png"
            alt="Indomaret Logo"
            width={160}
            height={50}
            className="mb-2"
          />
          <h1 className="text-2xl font-bold text-[#0047AB]">
            Login Indomaret Mini
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Selamat datang kembali, silakan login
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Email / Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 bg-[#f7faff] focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 bg-[#f7faff] focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0047AB] hover:bg-[#003b8a] text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

          <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
            <a href="#" className="hover:underline text-[#0047AB]">
              Lupa kata sandi?
            </a>
            <a href="#" className="hover:underline text-[#0047AB]">
              Buat akun
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
