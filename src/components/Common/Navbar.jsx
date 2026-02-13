import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// Optional: import { FaBars, FaTimes } from "react-icons/fa"; // If using react-icons

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (

        <div className={`navbar ${isScrolled ? "nav-scrolled" : "nav-transparent"}`}>
            <div className="navbar-container">


                <nav>
                    <div className="logo">
                        <img
                            width="200"
                            height="120"
                            src="https://tandoorirestaurants.pk/wp-content/uploads/2024/02/cropped-TR.png"
                            alt="Tandoori Restaurants"
                        />
                    </div>

                    {/* Hamburger Icon */}
                    <div className="hamburger" onClick={toggleMenu}>
                        <div className={`bar ${isOpen ? "open" : ""}`}></div>
                        <div className={`bar ${isOpen ? "open" : ""}`}></div>
                        <div className={`bar ${isOpen ? "open" : ""}`}></div>
                    </div>

                    <div className={`links ${isOpen ? "nav-active" : ""}`}>
                        <ul>
                            <li>
                                <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Menu" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/locations" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Locations</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gallery" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Gallery</NavLink>
                            </li>
                            <li>
                                <button className="order-btn">
                                    <a href="https://tandoori.blinkco.io/">Order Now</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;