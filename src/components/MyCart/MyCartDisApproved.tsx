import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import ChildrenImage from "../ChildrenImage/ChildrenImage";
import Discarded from "../Discarded/Discarded";

const MyCartDisApproved = () => {
  const allDisApproved = useAppSelector(
    (state) => state.childrens.ChildrenDiscardedItems
  ); // Redux Disapproved Childen list

  return (
    <div>
      {allDisApproved.map((el) => {
        return (
          <div key={el.userId}>
            <ChildrenImage name={el.userId} />
            <Discarded discardedItems={el.products} />
          </div>
        );
      })}
    </div>
  );
};

export default MyCartDisApproved;
