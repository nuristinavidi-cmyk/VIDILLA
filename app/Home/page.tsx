"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // setelah login sukses → pindah ke /indomaret
    router.push("/indomaret");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-xl p-6 w-80"
      >
        <h1 className="text-xl font-bold mb-4">Login Indomaret</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-3"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
