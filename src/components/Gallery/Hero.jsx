import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
 <div
        className="gallery-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.53)), url(./gallery.jpg)`,
        }}
      >
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-headline">A Legacy Forged in Fire.</h1>
          <p className="gallery-hero-subheadline">
            Bringing the soul of North Indian street food to your plate. We use
            centuries-old techniques to bring you the true taste of the Tandoor.
          </p>
          <div className="hero-buttons">
            <a href="menu" className="gallery-hero-btn gallery-hero-btn-primary">
              Explore the Flavors
            </a>
            <a href="about" className="gallery-hero-btn gallery-hero-btn-outline">
              Our Story
            </a>
          </div>
        </div>
      </div>
  )
}

export default Hero