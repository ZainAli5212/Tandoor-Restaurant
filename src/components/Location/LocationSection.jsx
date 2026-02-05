import React from 'react';
import { categories, locations } from '../../data/locations';
import BranchDisplay from './BranchDisplay';

const LocationSection = () => {
  return (
    <div className="location-wrapper">
      {categories.map((cat) => {
        // Filter locations for this specific city in the loop
        const cityBranches = locations.filter(item => item.category === cat.id);

        return (
          <div key={cat.id} className="location-main-section">
            {/* cat.id might be 'islamabad', cat.name might be 'Islamabad' */}
            <BranchDisplay 
              city={cat.name || cat.id} 
              resturantsLocations={cityBranches} 
            />
          </div>
        );
      })}
    </div>
  );
};

export default LocationSection;