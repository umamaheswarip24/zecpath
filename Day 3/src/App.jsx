import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import Footer from "./components/Footer";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app-container">
    <Navbar />
    <Hero />
    
    <h2 className="section-title">Available Jobs</h2>
    <JobList />
    
    <Footer />
  </div>
  );
}

export default App;