import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./FoodItem.css";
import assets from "../../assets/assets";
import { StoreContext } from "../../components/context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleAddToCartClick = () => {
    addToCart(id);
    navigate("/cart");
    window.scrollTo(0, 0);
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
            />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} />
        </div>
        <p className="food-item-desc">{description}</p>
        <div className="food-item-price-container">
          <p className="food-item-price">${price}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCartClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
