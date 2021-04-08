import React from "react";
import { IProduct } from "../ChildComp/ChildComp";
import Product from "../Product/Product";
import { v4 as uuidv4 } from "uuid";
import DiscardedCSS from "./Discarded.module.css";
import { CgSmileSad } from "react-icons/cg";
export interface IApproved {
  discardedItems: IProduct[];
}
const Discarded: React.FC<IApproved> = ({ discardedItems }) => {
  return (
    <div className={DiscardedCSS.discardedContainer}>
      <h1>
        <CgSmileSad />
        Not approved - {discardedItems.length} items
      </h1>
      {discardedItems.map((el) => {
        return <Product key={uuidv4()} productId={el.productId} />;
      })}
    </div>
  );
};

export default Discarded;
