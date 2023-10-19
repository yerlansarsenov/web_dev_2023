import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartButton.css";
import CartContext from "../../store/CartContext";

export default function CartButton(props) {
  const cartctx = useContext(CartContext);
  const numberofCartItem = cartctx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <button className="cart" onClick={props.onClick}>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <span> Your Cart</span>
      <span id="count">{numberofCartItem}</span>
    </button>
  );
}
