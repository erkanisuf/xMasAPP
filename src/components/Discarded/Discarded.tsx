import React from "react";
import { Product as IProduct } from "../ChildComp/ChildComp";
import Product from "../Product/Product";
import { v4 as uuidv4 } from "uuid";
export interface IApproved {
  discardedItems: IProduct[];
}
const Discarded: React.FC<IApproved> = ({ discardedItems }) => {
  return (
    <div>
      <h1>Discarded items</h1>
      {discardedItems.map((el) => {
        return <Product key={uuidv4()} productId={el.productId} />;
      })}
    </div>
  );
};

export default Discarded;
