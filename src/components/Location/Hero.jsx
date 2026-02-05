import React from 'react'
import "./Hero.css"
const Hero = () => {
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
            <button onClick={() => scrollToCity('Islamabad')}>Islamabad</button>
            <button onClick={() => scrollToCity('Rawalpindi')}>Rawalpindi</button>
            <button onClick={() => scrollToCity('Faisalabad')}>Faisalabad</button>
          </div>
        </div>
      </section>


  )
}

export default Hero