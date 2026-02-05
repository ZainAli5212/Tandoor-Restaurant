import React from 'react';
import "./LocationCard.css"

const LocationCard = ({ branchName, image, cityAddress, phoneNumber, mapLink }) => {
  return (
    <section className="location-card">
      {/* Visual Header */}
      <div className="location-image-wrapper">
        <img 
          src={image} 
          alt={`Exterior of our ${branchName} branch`} 
        />
      </div>

      {/* Location Details */}
      <div className="location-details">
        <h2 className="branch-name">{branchName}</h2>
        
        <address className="branch-address">
          <p>{cityAddress}</p>
        </address>

        <div className="contact-info">
          <a href={`tel:${phoneNumber}`} className="phone-link">
            {phoneNumber}
          </a>
        </div>

        {/* Action Button */}
        <div className="location-actions">
          <a 
            href={mapLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="direction-button"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationCard;