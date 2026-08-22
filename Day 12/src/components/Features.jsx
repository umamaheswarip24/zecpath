export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
        Why Choose Us
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Feature 1 */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 text-blue-600">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">Remote Work</h3>
          <p className="text-gray-600">Find thousands of fully remote positions from top companies worldwide.</p>
        </div>

        {/* Feature 2 */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 text-blue-600">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">Quick Apply</h3>
          <p className="text-gray-600">Apply to multiple jobs with a single click using your saved profile.</p>
        </div>

        {/* Feature 3 */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 text-blue-600">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">Verified Employers</h3>
          <p className="text-gray-600">Every company is strictly vetted to ensure a safe job search experience.</p>
        </div>

      </div>
    </section>
  );
}