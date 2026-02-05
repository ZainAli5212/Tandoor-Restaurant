import React from 'react';
import "./MenuDishCard.css"
import OrderBtn from '../Common/OrderBtn';

const MenuDishCard = ({ product }) => {
  const { name, description, price, isNew, image } = product;

  return (
    <article className="menu-dish-card">
      {/* Badge for New Items */}
      {isNew && (
        <span className="badge-new">NEW</span>
      )}

      {/* Image Section */}
      <div className="card-image-container">
        <img 
          src={image} 
          alt={name} 
          loading="lazy" 
        />
      </div>

      {/* Content Section */}
      <div className="card-body">
        <header className="card-header">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">{price}</span>
        </header>

        <p className="product-description">
          {description}
        </p>

        <footer className="card-footer">
          <OrderBtn btnText={"Order Now"}/>
          {/* <button type="button" className="add-to-cart-btn">
            Add to Order
          </button> */}
        </footer>
      </div>
    </article>
  );
};

export default MenuDishCard;