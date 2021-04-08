import React, { useState } from "react";
import ConfirmWindowCSS from "./ConfirmWindow.module.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GrFormCheckmark } from "react-icons/gr"; //
import { IoMdClose } from "react-icons/io"; //Icon
const ConfirmWindow = () => {
  const [open, setOpen] = useState<boolean>(true);
  if (!open) {
    return (
      <button
        className={ConfirmWindowCSS.submitButton}
        onClick={() => setOpen(true)}
      >
        <IoIosArrowDroprightCircle />
        Submit my cart
      </button>
    );
  }
  return (
    <div className={ConfirmWindowCSS.backgroundConfirm}>
      <div className={ConfirmWindowCSS.whiteConfirmContainer}>
        <p>Are you sure you want to continue ?</p>
        <div>
          <button className={ConfirmWindowCSS.confirmBtn}>
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
