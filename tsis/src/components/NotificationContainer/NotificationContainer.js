import React, { useState } from "react";
import Notification from "../Notification/Notification";
import { useNotifications } from "../../store/NotificationsContext";

function NotificationContainer() {
  const { notifications, addNotification, removeNotification } =
    useNotifications();

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-wrapper">
          <Notification
            message={notification.message}
            onClose={() => removeNotification(notification.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default NotificationContainer;
