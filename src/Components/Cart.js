import { useDispatch, useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "../Utils/utils";
import { clearCart, removeItem } from "../Utils/cartSlice";
import "../Styles/Cart.css";
import { useState } from "react";
import { UseSelector } from "react-redux/es/hooks/useSelector";

const Cart = () => {
  const price = useSelector((store) => store.cart.price);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorPay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("your offline");
      return;
    } else {
      alert("payment succes");
    }
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: "bolder" }}>Cart Item - {cartItems.length}</h1>
        <button
          style={{
            background: "red",
            width: "100px",
            height: "40px",
            color: "white",
          }}
          onClick={() => handleClearCart()}
        >
          Clear
        </button>
      </div>

      <ul className="cart">
        {cartItems.map((item) => {
          return (
            <li className="cart-item">
              <div>
                <img
                  src={IMAGE_CDN_URL + item.card.info?.imageId}
                  style={{ height: "200px" }}
                />
                <h2>{item.card.info?.name}</h2>
              </div>
              <div>RS.{item.card.info.price / 100}.00</div>
              <button onClick={() => handleRemoveItem(item)}>remove</button>
            </li>
          );
        })}
      </ul>

      <h1
        style={{ fontWeight: "bolder", textAlign: "center", marginTop: "20px" }}
      >
        {" "}
        total Price : {price}
      </h1>
      <button
        style={{
          textAlign: "center",
          width: "80%",
          height: "40px",
          background: "blue",
          marginLeft: "100px",
          color: "white",
        }}
        onClick={() => displayRazorPay()}
      >
        Check Out
      </button>
    </div>
  );
};

export default Cart;
