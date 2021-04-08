import React, { useState } from "react";

import { useAppSelector } from "../../Redux/hooks";
import Approved from "../Approved/Approved";

const MyCartApproved = () => {
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
    <div style={{ width: "100%", height: "50%", overflow: "scroll" }}>
      {allApproved.map((el) => {
        return (
          <div key={el.userId} style={{ backgroundColor: "green" }}>
            <p>{findUserName(el.userId)}</p>
            <Approved approvedItems={el.products} />
          </div>
        );
      })}
    </div>
  );
};

export default MyCartApproved;
