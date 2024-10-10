import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import LoginPopup from "../../loginPopup/LoginPopup";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, token } =
    useContext(StoreContext);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = !!token;

  const handleProceedToCheckout = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
    } else {
      navigate("/placeOrder");
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0)
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="bin">
                    <RiDeleteBin6Line />
                  </p>
                </div>
                <hr />
              </div>
            );
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 20}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
          </div>
          <button onClick={handleProceedToCheckout}>Proceed To CheckOut</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="PromoCode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}{" "}
    </div>
  );
};

export default Cart;
