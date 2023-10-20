import React, { createContext, useContext, useState } from "react";
import { useToast } from "@chakra-ui/react";

const NotificationsContext = createContext({
  notifications: [],
  addNotification: (message) => {},
  removeNotification: (id) => {},
});

export function useNotifications() {
  return useContext(NotificationsContext);
}

export function NotificationsProvider({ children }) {
  const toast = useToast();
  const [notifications, setNotifications] = useState([]);

  const _addNotification = (message) => {
    console.log("message = " + message);
    toast({
      title: message,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id: Date.now(), message },
    ]);
  };

  const _removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const notificationsContext = {
    notifications: notifications,
    addNotification: _addNotification,
    removeNotification: _removeNotification,
  };

  return (
    <NotificationsContext.Provider value={notificationsContext}>
      {children}
    </NotificationsContext.Provider>
  );
}
