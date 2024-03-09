import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}