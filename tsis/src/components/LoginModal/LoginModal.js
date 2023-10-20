import { useContext } from "react";
import { useAuth } from "../Auth/AuthProvider";
import classes from "../Cart/Cart.module.css";
import React, { useState } from "react";

import Modal from "../UI/Modal";
import { useToast } from "@chakra-ui/react";

function isValidEmail(email) {
  // Regular expression for a basic email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}

const LoginModal = (props) => {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      toast({
        title: "Please fill in all fields.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }
    if (!isValidEmail(email)) {
      toast({
        title: "Email is invalid",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }

    login(email, password);
    props.onHideLogin();
  };

  return (
    <Modal onClose={props.onHideLogin}>
      <div className={classes.total}>
        <span>Login</span>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes["input-field"]}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes["input-field"]}
        />
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={handleSubmit}>
          Login
        </button>
        <button className={classes["button--alt"]} onClick={props.onHideLogin}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;
