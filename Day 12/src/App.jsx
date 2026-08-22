import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JobGrid from "./components/JobGrid";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <JobGrid />
        <Features />
      </div>
      <Footer />
    </div>
  );
}