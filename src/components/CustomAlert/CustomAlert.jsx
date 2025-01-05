import React from 'react';
import './CustomAlert.scss';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default CustomAlert;
