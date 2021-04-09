import React from "react";
import Modal from "../Modal/Modal";
import MyCartApproved from "./MyCartApproved";
import MyCartDisApproved from "./MyCartDisApproved";
import CombineCSS from "./Combine.module.css";
import { BiSkipNextCircle } from "react-icons/bi";

interface ICombineWishList {
  setPage: any;
  items: boolean;
}
const CombineWishList: React.FC<ICombineWishList> = ({ setPage, items }) => {
  return (
    <div>
      <div className={CombineCSS.totalSumContainer}>
        <h1>Full list of your decision</h1>
        <button
          className={CombineCSS.NextBtn}
          onClick={() => setPage(2)}
          disabled={items}
        >
          <BiSkipNextCircle /> Next Step
        </button>
      </div>
      {items && <h2 style={{ textAlign: "center" }}>No items added yet </h2>}
      <MyCartApproved /> <MyCartDisApproved />
    </div>
  );
};

export default CombineWishList;
