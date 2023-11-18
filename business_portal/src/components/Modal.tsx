import React from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  bodyText: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, bodyText }) => {
  return (
    <>
      {isOpen && (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button onClick={onClose}>&times;</button>
            </div>
            <div className="title">
              <h1>Detailed Description</h1>
            </div>
            <div className="body">
              <p>{bodyText}</p>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
