export default function Input({ label, error, ...props }) {
  return (
    <div className="w-full">
      {label && <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>}
      <input 
        className={`block w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500"
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}