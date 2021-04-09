import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; //Icon
import SpinnerCSS from "./Spinner.module.css";
const SmallSpinner = () => {
  return (
    <div className={SpinnerCSS.smallspinnerContainer}>
      <AiOutlineLoading3Quarters className={SpinnerCSS.smallspinner} />
    </div>
  );
};

export default SmallSpinner;
