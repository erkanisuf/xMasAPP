import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import Discarded from "../Discarded/Discarded";

const MyCartDisApproved = () => {
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
      {allDisApproved.map((el) => {
        return (
          <div key={el.userId} style={{ backgroundColor: "red" }}>
            <p>{findUserName(el.userId)}</p>
            <Discarded discardedItems={el.products} />
          </div>
        );
      })}
    </div>
  );
};

export default MyCartDisApproved;
