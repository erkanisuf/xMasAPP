import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import CartToAPI from "./CartToAPI";
import CartToAPICSS from "./CartToAPI.module.css";

const CartToAPICombine = () => {
  const approvedItems = useAppSelector(
    (state) => state.childrens.ChildrenApprovedItems
  );
  const discardedItems = useAppSelector(
    (state) => state.childrens.ChildrenApprovedItems
  );
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <h5>Approved Items</h5>
        {approvedItems.map((el) => {
          return <CartToAPI key={el.userId} usercart={el} />;
        })}
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <h5>Discarded Items</h5>
        {discardedItems.map((el) => {
          return <CartToAPI key={el.userId} usercart={el} />;
        })}
      </div>
    </div>
  );
};

export default CartToAPICombine;
