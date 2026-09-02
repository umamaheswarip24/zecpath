export default function Loader({ size = "md", text }) {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-[3px]", // Fixed: using arbitrary value for 3px
    lg: "h-12 w-12 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div 
        className={`animate-spin rounded-full border-blue-600 border-t-transparent ${sizes[size]}`} 
      />
      {text && <p className="text-sm font-medium text-gray-600">{text}</p>}
    </div>
  );
}