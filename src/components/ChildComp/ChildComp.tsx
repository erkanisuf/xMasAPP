import React, { useEffect, useState } from "react";
import Product, { IProduct } from "../Product/Product";
import ChildCSS from "./Child.module.css";
import { v4 as uuidv4 } from "uuid";
export interface IChildCompProp {
  childname: string;
  fetchURL: string;
}
export interface Product {
  productId: number;
  quantity: number;
}
export interface ICart {
  id: number;
  userId: number;
  date: Date;
  products: Product[];
  __v: number;
}
const ChildComp: React.FC<IChildCompProp> = ({ childname, fetchURL }) => {
  const [cart, setCart] = useState<ICart | null>();
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    //Abort Controller to Avoid fetch errors.
    const abortControl = new AbortController();
    //Fetches from the Api Cart. The Link comes from the Main component .
    const fetchCart = (urlParam: string) => {
      fetch(`${urlParam}`, {
        signal: abortControl.signal,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            //ERROR
          }
        })
        .then((json) => {
          if (json) {
            setCart(json);
          } else {
            //ERROR
          }
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Abort");
          } else {
            console.log(err);
            //ERROR
          }
        });
    };
    fetchCart(fetchURL);

    return () => {
      abortControl.abort();
    };
  }, [fetchURL]);
  return (
    <div>
      <h1>{childname}</h1>
      <div className={ChildCSS.childContainerProducts}>
        {cart?.products.map((el) => {
          return <Product key={uuidv4()} productId={el.productId} />;
        })}
      </div>
    </div>
  );
};

export default ChildComp;
