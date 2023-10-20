import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import AuthProvider from "./components/Auth/AuthProvider";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import LoginModal from "./components/LoginModal/LoginModal";
import NotificationContainer from "./components/NotificationContainer/NotificationContainer";
import { NotificationsProvider } from "./store/NotificationsContext";
import { ChakraProvider } from "@chakra-ui/react";

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

  // const addNotification = (message) => {
  //   // Call the addNotificationHandler function from the NotificationContainer
  //   addNotificationHandler(message);
  // };

  return (
    <ChakraProvider>
      <AuthProvider>
        <NotificationsProvider>
          <CartProvider>
            {cartIsShown && <Cart onHideCart={hideCartHandler} />}
            {loginIsShown && <LoginModal onHideLogin={hideLoginHandler} />}
            <Header
              onShowCart={showCartHandler}
              onShowLogin={showLoginHandler}
            />
            <main>
              <Meals />
            </main>
          </CartProvider>
        </NotificationsProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
