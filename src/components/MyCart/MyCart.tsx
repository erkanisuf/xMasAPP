import React, { useEffect, useState } from "react";

import { useAppSelector } from "../../Redux/hooks";

import Product from "../Product/Product";

const MyCart = () => {
  const [myCart, setMyCart] = useState<any>([]);
  const allApproved = useAppSelector(
    (state) => state.childrens.ChildrenApprovedItems
  ); // Redux Approved Childen list
  const allDisApproved = useAppSelector(
    (state) => state.childrens.ChildrenDiscardedItems
  ); // Redux Disapproved Childen list
  const myChildren = useAppSelector((state) => state.main.myChildren); // Redux Approved Childen list

  //Function that finds the Childens Name from the id
  const findUserName = (param: number) => {
    const findChildren = myChildren.find((el) => el.id === param);
    return findChildren?.name;
  };

  return (
    <div>
      {allApproved.map((el) => {
        return (
          <div key={el.userId}>
            <p>{findUserName(el.userId)}</p>
            {el.products.map((el2) => {
              return <Product key={el2.productId} productId={el2.productId} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MyCart;
