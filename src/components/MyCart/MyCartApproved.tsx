import React, { useState } from "react";

import { useAppSelector } from "../../Redux/hooks";
import Approved from "../Approved/Approved";
import ChildrenImage from "../ChildrenImage/ChildrenImage";

const MyCartApproved = () => {
  const allApproved = useAppSelector(
    (state) => state.childrens.ChildrenApprovedItems
  ); // Redux Approved Childen list
  const myChildren = useAppSelector((state) => state.main.myChildren); // Redux Approved Childen list

  //Function that finds the Childens Name from the id
  const findUserName = (param: number) => {
    const findChildren = myChildren.find((el) => el.id === param);
    return findChildren ? findChildren : { name: "", image: "" };
  };

  return (
    <div>
      {allApproved.map((el) => {
        return (
          <div key={el.userId}>
            {
              <ChildrenImage
                name={findUserName(el.userId)?.name}
                image={findUserName(el.userId)?.image}
              />
            }

            <Approved approvedItems={el.products} />
          </div>
        );
      })}
    </div>
  );
};

export default MyCartApproved;
