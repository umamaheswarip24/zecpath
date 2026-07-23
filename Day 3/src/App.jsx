import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div>
            <Navbar />

            <main>
                <section className="hero" id="home">
                    <h1>Find Your Next Opportunity</h1>

                    <p>
                        Explore jobs and start building your career
                        with ZecPath.
                    </p>
                </section>

                <section className="job-section" id="jobs">
                    <h2>Featured Opportunities</h2>

                    <div className="card-container">
                        <Card
                            image="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                            title="Frontend Developer"
                            description="Build modern and responsive web applications."
                            buttonLabel="View Job"
                        />

                        <Card
                            image="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
                            title="Software Tester"
                            description="Test applications and help improve software quality."
                            buttonLabel="Apply Now"
                        />

                        <Card
                            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            title="UI Designer"
                            description="Create simple and attractive user interfaces."
                            buttonLabel="View Details"
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;