import Link from 'next/link';

export default function Signup() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">Signup Page</h1>

      <Link href="/login">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to Login
        </button>
      </Link>
    </div>
  );
}