import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">Login Page</h1>

      <Link href="/dashboard">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to Dashboard
        </button>
      </Link>

      <Link href="/signup">
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Go to Signup
        </button>
      </Link>
    </div>
  );
}