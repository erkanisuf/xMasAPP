import React, { useEffect, useRef, useState } from "react";
import ModalCSS from "./Modal.module.css";
import { CgCloseR } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";
import { useAppSelector } from "../../Redux/hooks";
interface IModal {
  children: React.ReactNode;
}
const Modal: React.FC<IModal> = ({ children }) => {
  const approvedItems = useAppSelector(
    (state) => state.childrens.ChildrenApprovedItems
  ); // Redux state For the .Lenght of the items on the Submit Choices Button .
  const discardedItems = useAppSelector(
    (state) => state.childrens.ChildrenDiscardedItems
  ); // Redux state For the .Lenght of the items on the Submit Choices Button .
  const [open, setOpen] = useState<boolean>(false);
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
    return (
      <div className={ModalCSS.checkOutContainer}>
        <button onClick={() => setOpen(true)} className={ModalCSS.checkoutBtn}>
          <RiShoppingCartLine />
          Submit your choices
          <span className={ModalCSS.spanDiscarded}>
            {discardedItems.length}
          </span>
          <span className={ModalCSS.spanApproved}>{approvedItems.length} </span>
        </button>
      </div>
    );
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
