import React from 'react'

import { categories } from '../../data/locations'
import "./Hero.css"
const Hero = () => {
    const scrollToCity = (city) => {
      const element = document.getElementById(city);
      if (element) {
        element.scrollIntoView({ behavior: "smooth"});
      }
    }
  return (

      <section className="location-hero" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.58),rgba(0, 0, 0, 0.296)) , url(./location.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "top",
      height: "100vh",
      width: "100%",
    }}>
        <div className="location-hero-content">
          <span className="badge">11 Branches Nationwide</span>
          <h1>Find a Tandoori Near You</h1>
          <p>From the heart of Islamabad to the streets of Faisalabad, we’re bringing the sizzle closer to you. Find your nearest branch below.</p>

          <div className="city-quick-links">
            <span>Jump to:</span>
            {
              categories.map((cat) => (
                <button key={cat.id} onClick={() => scrollToCity(cat.id.toLowerCase())}>{cat.id}</button>
              ))
            }

          </div>
        </div>
      </section>


  )
}

export default Hero