import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; //Icon
import SpinnerCSS from "./Spinner.module.css";
const Spinner = () => {
  return (
    <div className={SpinnerCSS.spinnerContainer}>
      <h2>Loading data...</h2>
      <AiOutlineLoading3Quarters className={SpinnerCSS.spinner} />
    </div>
  );
};

export default Spinner;
