import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <div className="flex-grow">
        <Hero />
        <Features />
      </div>
      <Footer />
    </div>
  );
}