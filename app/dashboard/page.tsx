import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">Dashboard</h1>

      <Link href="/login">
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </Link>
    </div>
  );
}