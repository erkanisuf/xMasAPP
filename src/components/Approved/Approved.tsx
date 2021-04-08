import React from "react";
import { IProduct } from "../ChildComp/ChildComp";
import Product from "../Product/Product";
import { v4 as uuidv4 } from "uuid";
import ApprovedCSS from "./Approved.module.css";
import { CgSmileMouthOpen } from "react-icons/cg";
export interface IApproved {
  approvedItems: IProduct[];
}
const Approved: React.FC<IApproved> = ({ approvedItems }) => {
  return (
    <div className={ApprovedCSS.approvedContainer}>
      <h1>
        <CgSmileMouthOpen />
        Approved wishes - {approvedItems.length} items
      </h1>
      {approvedItems.map((el) => {
        return <Product key={uuidv4()} productId={el.productId} />;
      })}
    </div>
  );
};

export default React.memo(Approved);
