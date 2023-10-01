import React, { useState, useEffect } from "react";
import Login from "./Login/Login";
import MainHeader from "./MainHeader/MainHeader";
import Storybook from "./Storybook";

function AuthCheck() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const loginStatus = localStorage.getItem("isLoggedIn");
      if (loginStatus === "1") {
        setIsLoggedIn(true);
      }
    }, [isLoggedIn]);
  
    const loginHandler = (email, password) => {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
    };
  
    const logoutHandler = () => {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
    };
  
    return (
      <React.Fragment>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Storybook onLogout={logoutHandler} />}
        </main>
      </React.Fragment>
    );
  }

export default AuthCheck;