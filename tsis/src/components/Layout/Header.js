import "./Header.css";
import mealsImage from "../../asset/meals.jpg";
import { Fragment } from "react";
import CartButton from "./CartButton";
import { useAuth } from "../Auth/AuthProvider";
import LoginButton from "../LoginButton/LoginButton";

export default function Header(props) {
  const { user, login, logout } = useAuth();
  return (
    <Fragment>
      <div className="header">
        <h1>Meals</h1>
        {user ? (
          <CartButton onClick={props.onShowCart} />
        ) : (
          // <CartButton onClick={props.onShowCart} />
          <LoginButton onClick={props.onShowLogin} />
        )}
      </div>
      <div className="container">
        <div className="image-container">
          <img src={mealsImage} alt="A table with full of delicious food!" />
        </div>
        <div className="intro">
          <h2>Delicious Food Delivered to you!!</h2>
          Experience the joy of hassle-free dining, as we deliver a feast of
          flavors right to your doorstep. Welcome to a world of convenience and
          delectable indulgence!"
        </div>
      </div>
    </Fragment>
  );
}
