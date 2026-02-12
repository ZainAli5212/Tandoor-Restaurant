import React from 'react';
import './BranchDisplay.css';
import { categories, locations } from '../../data/locations';


const LocationCard = ({ location }) => (
  <div className="location-card">
    <img 
      src={location.image} 
      alt={location.branchName} 
      className="card-image"
    />
    <div className="card-content">
      <h4 className="card-title">{location.branchName}</h4>
      <p className="card-text"><strong>City:</strong> {location.city}</p>
      <p className="card-text"><strong>Address:</strong> {location.address}</p>
      <p className="card-phone">
        <span className="phone-icon">📞</span>
        {location.phone}
      </p>
      <a href="https://www.google.com/maps" target='_blank'>Get Direction</a> 
    </div>
  </div>
);

const LocationDisplay = () => {
  return (
    <div 
      className="location-main-container" 
    >
      <div className="location-container">
        <h1 className="main-heading">Our Branch Network</h1>

        {categories.map((cat) => {
          const filteredLocations = locations.filter(
            (loc) => loc.category.toLowerCase() === cat.id.toLowerCase()
          );

          if (filteredLocations.length === 0) return null;

          return (
            <section key={cat.id} className="location-section">
              <div className="section-header">
                <h2 className="category-title" id={cat.id}>{cat.id} Locations</h2>
                <div className="header-divider"></div>
              </div>

              <div className="location-grid">
                {filteredLocations.map((loc) => (
                  <LocationCard key={loc.id} location={loc} />
                  
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default LocationDisplay;