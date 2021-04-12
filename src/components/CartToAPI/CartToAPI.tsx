import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { OBJtoAPI } from "../../Redux/ChildrensSlice";
import ChildrenImage from "../ChildrenImage/ChildrenImage";
import SmallSpinner from "../Spinner/SmallSpinner";
import CartToAPICSS from "./CartToAPI.module.css";

interface ICartToAPI {
  usercart: OBJtoAPI;
  type: TypeContainer;
}
interface Iitem {
  id: number;
  _id: string;
  products: any; // APi returns empty arr of this sinc eits not saving to the DB
}
type TypeContainer = "approved" | "discarded";
const CartToAPI: React.FC<ICartToAPI> = ({ usercart, type }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [item, setItem] = useState<Iitem>({ id: 0, _id: "", products: [] });
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();
  console.log("USER CART", usercart);
  useEffect(() => {
    const abortCont = new AbortController();
    const postToAPI = () => {
      setLoading(true);
      fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        signal: abortCont.signal,
        body: JSON.stringify(usercart),
      })
        .then((res) => res.json())
        .then((json) => {
          setItem(json);
          setLoading(false);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            setError(true);
          }
        });
    };
    postToAPI();
    return () => abortCont.abort();
  }, [usercart, dispatch]);

  if (loading) {
    return (
      <div
        className={
          type === "approved"
            ? CartToAPICSS.containerGreen
            : CartToAPICSS.containerRed
        }
      >
        <ChildrenImage name={usercart.userId} />
        <SmallSpinner />
      </div>
    );
  } else if (error) {
    return (
      <div
        className={
          type === "approved"
            ? CartToAPICSS.containerGreen
            : CartToAPICSS.containerRed
        }
      >
        <ChildrenImage name={usercart.userId} />
        <span className={CartToAPICSS.error}>Error , not saved!</span>
      </div>
    );
  }
  return (
    <div
      className={
        type === "approved"
          ? CartToAPICSS.containerGreen
          : CartToAPICSS.containerRed
      }
    >
      <ChildrenImage name={usercart.userId} />
      <span className={CartToAPICSS.success}>successfully saved!</span>

      <span>
        {" "}
        <span style={{ fontWeight: 800 }}>ID:</span>
        {item._id}
      </span>
    </div>
  );
};

export default CartToAPI;
