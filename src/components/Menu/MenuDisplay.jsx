import React, { useState } from 'react';
import { menuItems, categories } from '../../data/MenuData'; // Adjust path as needed
import MenuDishCard from "./MenuDishCard"
import './MenuDisplay.css';

const MenuDisplay = () => {
  // State to track selected category - default is 'all'
  const [activeCategory, setActiveCategory] = useState('all');

  // Logic: Filter items based on activeCategory
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="menu-display-section">
      {/* Category Filter Bar */}
      <div className="category-container">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="results-text">
        Showing {filteredItems.length} items in <strong>{activeCategory}</strong>
      </p>

      {/* The Menu Grid */}
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <MenuDishCard 
          product={item}
          />
        ))}
      </div>
      
      {/* Empty State Logic */}
      {filteredItems.length === 0 && (
        <div className="no-items">
          <p>No dishes found in this category yet. Stay tuned!</p>
        </div>
      )}
    </section>
  );
};

export default MenuDisplay;