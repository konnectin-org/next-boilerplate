import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center justify-center h-screen bg-gray-200">
      <Link href="/about" className="text-neon-pink hover:text-red-800 font-bold py-2 px-4 mx-2 rounded">About</Link>
      <Link href="/dashboard" className="text-neon-cyan hover:text-neon-cyen font-bold py-2 px-4 mx-2 rounded">Dashboard</Link>
    </main>
  );
}