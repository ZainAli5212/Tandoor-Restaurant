import React from 'react'
import "./MenuHero.css"

const MenuHero = () => {
    return (
        <div>
            <section className="menu-hero" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.58),rgba(0, 0, 0, 0.296)) , url(./menu.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}>
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Taste the Tradition</h1>
                        <p>Explore our wide variety of authentic Pakistani and Continental dishes.</p>

                        {/* The Search Bar is the "Hero" of the menu page */}
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search for Biryani, Kebabs, or Steaks..."
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                            <button className="search-btn">Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MenuHero