import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";
import { useNotifications } from "../../../store/NotificationsContext";

export default function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const { notifications, addNotification, removeNotification } =
    useNotifications();
  const price = `${props.price}₸`;

  const AddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    addNotification(props.name + " added to cart");
  };
  return (
    <div>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCart={AddToCartHandler} />
        </div>
      </li>
    </div>
  );
}
