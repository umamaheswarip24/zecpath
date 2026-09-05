export default function Toast({ message, type = "info", onClose }) {
  const styles = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  };

  return (
    <div className={`flex items-center justify-between rounded-lg border px-4 py-3 shadow-md ${styles[type]}`}>
      <span className="text-sm font-medium">{message}</span>
      {onClose && (
        <button 
          onClick={onClose} 
          className="ml-4 font-bold text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          ✕
        </button>
      )}
    </div>
  );
}