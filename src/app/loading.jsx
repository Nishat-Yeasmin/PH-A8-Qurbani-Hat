export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-600 text-lg">
        Loading data...
      </p>

    </div>
  );
}