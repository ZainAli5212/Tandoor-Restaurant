import React from 'react';
import LocationCard from './LocationCard';

// 1. Destructure props using { }
const BranchDisplay = ({ city, resturantsLocations }) => {

  // Safety check: if resturantsLocations is undefined, return null or a message
  if (!resturantsLocations) return null;

  return (
    <section className="location-container">
      <header className='city-header'>Restaurants in {city}</header>
      
      {/* 2. Changed key to use 'city' prop instead of 'location.city' */}
      <div className="city-group-box">
        {resturantsLocations.map((branch, index) => (
          /* 3. Added key to the mapped div and fixed prop passing */
          <div key={branch.id || index} className="city-grid">
            <LocationCard branch={branch} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BranchDisplay;