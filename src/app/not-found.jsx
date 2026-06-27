import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">

      {/* Illustration */}
      <h1 className="text-6xl font-bold text-red-500">404</h1>

      <h2 className="text-2xl font-semibold mt-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-2">
        The page you are looking for does not exist.
      </p>

      <Link href="/">
        <button className="cursor-pointer mt-6 px-6 py-3 bg-green-700 text-white rounded-lg">
          Back To Home
        </button>
      </Link>

    </div>
  );
}