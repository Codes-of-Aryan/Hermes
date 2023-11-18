import React from "react";

interface PopupProps {
  content: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ content, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Popup;
