import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <span className="text-xl font-bold text-blue-600">Zecpath Jobs</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden space-x-8 md:flex">
            <a href="#" className="px-3 py-2 font-medium text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="px-3 py-2 font-medium text-gray-700 hover:text-blue-600">Find Jobs</a>
            <a href="#" className="px-3 py-2 font-medium text-gray-700 hover:text-blue-600">Employers</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600">Home</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600">Find Jobs</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600">Employers</a>
          </div>
        </div>
      )}
    </nav>
  );
}