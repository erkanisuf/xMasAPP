import React, { useState } from "react";

import { useAppSelector } from "../../Redux/hooks";
import Approved from "../Approved/Approved";
import ChildrenImage from "../ChildrenImage/ChildrenImage";

const MyCartApproved = () => {
  const allApproved = useAppSelector(
    (state) => state.childrens.ChildrenApprovedItems
  ); // Redux Approved Childen list

  return (
    <div>
      {allApproved.map((el) => {
        return (
          <div key={el.userId}>
            {<ChildrenImage name={el.userId} />}

            <Approved approvedItems={el.products} />
          </div>
        );
      })}
    </div>
  );
};

export default MyCartApproved;
