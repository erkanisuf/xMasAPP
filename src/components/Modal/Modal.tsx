import React, { useEffect, useRef, useState } from "react";
import ModalCSS from "./Modal.module.css";
import { CgCloseR } from "react-icons/cg";
interface IModal {
  children: React.ReactNode;
}
const Modal: React.FC<IModal> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);
  const modalRef = useRef<HTMLDivElement | null>(null); // for the Modal
  console.log(modalRef.current);
  const handleClickOutside = (event: any) => {
    // Closes Modal if its clicked on the black transperant if its white its ok
    if (event.target === modalRef.current) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true); // ON CLick checks if clicked on Balack(modal ) ,if so it closes  ,if clicked on white or on pic doesnt
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  if (!open) {
    return <button onClick={() => setOpen(true)}>Open Modal</button>;
  } else
    return (
      <div className={ModalCSS.blackModal} ref={modalRef}>
        <div className={ModalCSS.whiteModal}>
          <button
            className={ModalCSS.closeButton}
            onClick={() => setOpen(false)}
          >
            <CgCloseR />
          </button>
          <div style={{ height: "100px" }}></div>
          {/* This Upper Div is just to make somewhite space of the a button */}
          {children}
        </div>
      </div>
    );
};

export default Modal;
