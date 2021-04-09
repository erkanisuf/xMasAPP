import React, { useEffect, useState } from "react";
import { OBJtoAPI } from "../../Redux/ChildrensSlice";
import SmallSpinner from "../Spinner/SmallSpinner";
import CartToAPICSS from "./CartToAPI.module.css";

interface ICartToAPI {
  usercart: OBJtoAPI;
}
interface IResponse {
  response: {
    id: number;
    _id: string;
    products: any; //  The Api returns empty products array.}
  };
  isLoading: boolean;
  error: any;
}
const CartToAPI: React.FC<ICartToAPI> = ({ usercart }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [item, setItem] = useState<any>({});
  const [error, setError] = useState<any>();
  const postToAPI = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify(usercart),
    })
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    postToAPI();
    return () => {};
  }, [usercart]);
  if (loading) {
    return (
      <div className={CartToAPICSS.container}>
        <span>{usercart.userId}</span>
        <SmallSpinner />
      </div>
    );
  } else if (error) {
    return (
      <div className={CartToAPICSS.container}>Error. Something went wrong!</div>
    );
  }
  return (
    <div className={CartToAPICSS.container}>
      <span style={{ color: "blue" }}>{usercart.userId}</span>
      {item._id}
    </div>
  );
};

export default CartToAPI;
