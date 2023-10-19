import React from "react";
import "./LoginButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

function LoginButton(props) {
  return (
    <button className="login" onClick={props.onClick}>
      {/* <FontAwesomeIcon icon={faDoorOpen} size="lg" /> */}
      <span>Login</span>
    </button>
  );
}

export default LoginButton;
