export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center px-4 pt-32 text-center">
      <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-blue-600 md:text-6xl">
        Find Your Dream Job Today
      </h1>
      <p className="mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
        Discover thousands of remote and local opportunities. Connect with top companies and take the next step in your career.
      </p>
      <div className="flex justify-center gap-4">
        <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
          Browse Jobs
        </button>
        <button className="rounded-lg border-2 border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50">
          Post a Job
        </button>
      </div>
    </main>
  );
}