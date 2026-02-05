import React from 'react';
import './AboutCards.css';

const AboutCards = ({ values }) => {
    
  return (
    <section className="about-cards-section">
      <div className="about-cards-container">
        
        {/* Mission/Vision/History Cards */}
        <div className="values-grid">
          {values.map((item, index) => (
            <div key={index} className="value-card">
              <div className="icon-box">
                {item.icon}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-banner">
          <div className="cta-content">
            <h2 className="cta-title">Experience the Legacy</h2>
            <p className="cta-text">
              From traditional Chinese and Continental to our signature Traditional Desi cuisine,
              we bring the best of Pakistan to your table.
            </p>
            <button className="cta-button">
              Find a Location
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCards;