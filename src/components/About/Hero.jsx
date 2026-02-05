import React from 'react'
import {  MapPin } from 'lucide-react';
import "./Hero.css"

const AboutHero = () => {
  return (




     <div className='menu-section' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.5)) , url(./public/hero-2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}>
       <div className="about-container" >  
        <div className="about-header-flex" >

          <div className="about-header-content" >


            <span className="subtitle">Since 1993</span>
            <h1 className="main-title">
              Celebrating 32 Years of <span className="italic-text">Flavor</span>
            </h1>
            <p className="description">
              Tandoori was first established with a spark of zeal that still fuels our enthusiasm today.
              Our devotion has allowed our vision to broaden, while our consistency has seen us through
              every challenge, including the global pandemic.
            </p>
            <div className="location-tag">
              <MapPin size={18} />
              <span>Founded in Islamabad • Expanding across Pakistan</span>
            </div>
          </div>

          <div className="header-image-wrapper" >

            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80"
                alt="Tandoori Restaurant Interior"
                className="main-img"/>
            </div>
          </div>


        </div>
      </div>
     

      </div>
  )
}

export default AboutHero