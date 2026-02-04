import "./Navbar.css"

import { useState, useEffect } from "react";


import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToReservations = () => {
    // setIsMobileMenuOpen(false);
    document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' });
  }; 
    return (
        <div className={`navbar ${isScrolled ? "nav-scrolled" : "nav-transparent"}`}>
            {/* <div className="filler"></div> */}
            <nav>
                <div className="logo">
                    <img width="200" height="120" src="https://tandoorirestaurants.pk/wp-content/uploads/2024/02/cropped-TR.png" alt="Tandoori Restaurants" decoding="async" />            </div>

                <div className="links">
                    <ul>

                        <li><NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>About</NavLink></li>
                        <li><NavLink to="/Menu" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Menu</NavLink></li>
                        <li><NavLink to="/locations" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Locations</NavLink></li>
                        <li><NavLink to="/gallery" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Gallery</NavLink></li>
                        <li> <button onClick={() => scrollToReservations()} >Reserve Table</button> </li>
                        
                        {/* look at them later */}

                        {/* <li><NavLink to="/franchising" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Franchising</NavLink></li> */}
                        {/* <li><NavLink to="/tandoori-catering" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Tandoori Catering</NavLink></li> */}
                        {/* <li><NavLink to="/order-now" className={({ isActive }) => (isActive ? "active-link" : "nav-link")} >Order Now</NavLink></li> */}

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar