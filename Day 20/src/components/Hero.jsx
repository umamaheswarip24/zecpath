import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-600 sm:text-5xl md:text-6xl">
          Find Your Dream Job Today
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover thousands of remote and local opportunities. Connect with top
          companies and take the next step in your career.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/jobs"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Browse Jobs
          </Link>
          <Link
            to="/dashboard/post-job"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </section>
  );
}