import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import ChildrenImage from "../ChildrenImage/ChildrenImage";
import Discarded from "../Discarded/Discarded";

const MyCartDisApproved = () => {
  const allDisApproved = useAppSelector(
    (state) => state.childrens.ChildrenDiscardedItems
  ); // Redux Disapproved Childen list
  const myChildren = useAppSelector((state) => state.main.myChildren); // Redux Approved Childen list

  //Function that finds the Childens Name from the id
  const findUserName = (param: number) => {
    const findChildren = myChildren.find((el) => el.id === param);
    return findChildren ? findChildren : { name: "", image: "" };
  };

  return (
    <div>
      {allDisApproved.map((el) => {
        return (
          <div key={el.userId}>
            <ChildrenImage
              name={findUserName(el.userId)?.name}
              image={findUserName(el.userId)?.image}
            />
            <Discarded discardedItems={el.products} />
          </div>
        );
      })}
    </div>
  );
};

export default MyCartDisApproved;
