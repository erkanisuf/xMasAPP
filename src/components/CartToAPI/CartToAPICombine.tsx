import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import CartToAPI from "./CartToAPI";
import CartToAPICSS from "./CartToAPI.module.css";
import { CgSmileMouthOpen } from "react-icons/cg";
import { CgSmileSad } from "react-icons/cg";
import { CgCloseR } from "react-icons/cg";
import useWidth from "../../Hooks/useWidth";
import { v4 as uuidv4 } from "uuid";
interface ICartToAPICombine {
  setOpen: any;
}
const CartToAPICombine: React.FC<ICartToAPICombine> = ({ setOpen }) => {
  //Combined Componend of approved and discarded items , for the result of the API form the post request.
  const { width } = useWidth(); // custom hook for width check (and height)
  const approvedItems = useAppSelector(
    (state) => state.childrens.ChildrenApprovedItems
  );
  const discardedItems = useAppSelector(
    (state) => state.childrens.ChildrenDiscardedItems
  );

  const redirect = () => {
    window.location.reload();
  };
  return (
    <div
      style={{
        width: "100%",
        height: "80%",
        display: "flex ",

        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <button className={CartToAPICSS.closeButton} onClick={redirect}>
        <CgCloseR />
        Close and redirect
      </button>
      <div
        style={{
          width: "100%",
          height: "80%",
          display: "flex ",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: width > 1024 ? "row" : "column",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              backgroundColor: "rgb(14, 165, 39)",
              width: "100%",
              color: "white",
              padding: "10px 0px",
              borderRadius: "10px",
              margin: "5px",
              textAlign: "center",
            }}
          >
            <CgSmileMouthOpen />
            Approved Items
          </h2>
          {approvedItems.map((el) => {
            return <CartToAPI key={uuidv4()} usercart={el} type={"approved"} />;
          })}
        </div>
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <h2
            style={{
              backgroundColor: "rgb(165, 14, 52)",
              width: "100%",
              color: "white",
              margin: "5px",
              padding: "10px 0px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <CgSmileSad />
            Discarded Items
          </h2>
          {discardedItems.map((el) => {
            return (
              <CartToAPI key={uuidv4()} usercart={el} type={"discarded"} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartToAPICombine;
