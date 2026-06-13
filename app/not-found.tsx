import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-8xl font-black text-gray-100 select-none">404</p>
      <h1 className="mt-4 text-2xl font-bold text-gray-900">Page not found</h1>
      <p className="mt-2 text-gray-500">
        This page doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
