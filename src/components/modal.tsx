import React, { ReactNode } from "react";
import "./modal.css";

interface ModalProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
}

function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div className="modal" onClick={onClose} />
      <div className="modal__form">
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
}

export default Modal;
