import React from "react";

function Notification({ message, onClose }) {
  return (
    <div className="notification">
      <span>{message}</span>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Notification;
