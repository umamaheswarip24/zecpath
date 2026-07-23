function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">ZecPath</h2>

            <ul className="nav-links">
                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#jobs">Jobs</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;