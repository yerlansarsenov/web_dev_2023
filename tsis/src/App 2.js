import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import AuthProvider from "./components/Auth/AuthProvider";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import LoginModal from "./components/LoginModal/LoginModal";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [loginIsShown, setLoginIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  return (
    <AuthProvider>
      <CartProvider>
        {cartIsShown && <Cart onHideCart={hideCartHandler} />}
        {loginIsShown && <LoginModal onHideLogin={hideLoginHandler} />}
        <Header onShowCart={showCartHandler} onShowLogin={showLoginHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
