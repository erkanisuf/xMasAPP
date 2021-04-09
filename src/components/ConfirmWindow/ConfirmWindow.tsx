import React, { useState } from "react";
import ConfirmWindowCSS from "./ConfirmWindow.module.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GrFormCheckmark } from "react-icons/gr"; //
import { IoMdClose } from "react-icons/io"; //Icon
import { useAppSelector } from "../../Redux/hooks";
import CartToAPICombine from "../CartToAPI/CartToAPICombine";
const ConfirmWindow = () => {
  const myCartItems = useAppSelector((state) => state.childrens.myCart); // Redux Approved Childen list
  const [open, setOpen] = useState<boolean>(false);
  const [postRequest, setPostRequest] = useState<boolean>(false);
  if (!open) {
    return (
      <button
        disabled={myCartItems.length === 0 ? true : false}
        className={ConfirmWindowCSS.submitButton}
        onClick={() => setOpen(true)}
      >
        <IoIosArrowDroprightCircle />
        Submit my cart
      </button>
    );
  } else if (postRequest) {
    return (
      <div className={ConfirmWindowCSS.backgroundConfirm}>
        <div className={ConfirmWindowCSS.loadingContainer}>
          {" "}
          <CartToAPICombine setOpen={setOpen} />
        </div>
      </div>
    );
  } else
    return (
      <div className={ConfirmWindowCSS.backgroundConfirm}>
        <div className={ConfirmWindowCSS.whiteConfirmContainer}>
          <p>Are you sure with your decision?</p>
          <div>
            <button
              className={ConfirmWindowCSS.confirmBtn}
              onClick={() => setPostRequest(true)}
            >
              <GrFormCheckmark fontSize="30px" style={{ color: "white" }} />
              Confirm
            </button>
            <button
              className={ConfirmWindowCSS.cancelBtn}
              onClick={() => setOpen(false)}
            >
              <IoMdClose fontSize="30px" style={{ color: "white" }} /> Cancel
            </button>
          </div>
        </div>
      </div>
    );
};

export default ConfirmWindow;
