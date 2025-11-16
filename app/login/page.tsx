"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // langsung masuk ke halaman Indomaret tanpa cek apa pun
    router.push("/indomaret");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Login Indomaret Mini
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Masukkan nama apa saja"
            className="w-full px-3 py-2 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Masukkan sandi apa saja"
            className="w-full px-3 py-2 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
