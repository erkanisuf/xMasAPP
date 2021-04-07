import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import Product from "../Product/Product";

const MyCart = () => {
  const myCartItems = useAppSelector((state) => state.childrens.myCart); // Redux Approved Childen list
  const AllProducts = useAppSelector((state) => state.main.products); // Redux Approved Childen list

  //Sums Normal Price of product with the quantity and with the Discount
  const calculateQuantDiscount = (param: number, param2: number) => {
    const findProductPrice = AllProducts.find((el) => el.id === param);
    if (findProductPrice) {
      let value = findProductPrice?.price * param2;
      let discount = (param2 * 10) / 100;
      const calculate = value - value * discount;
      return calculate;
    }
  };
  //Sums Normal Price of product with the quantity
  const calculateNormalPrice = (param: number, param2: number) => {
    const findProductPrice = AllProducts.find((el) => el.id === param);
    if (findProductPrice) {
      const calculate = findProductPrice?.price * param2;
      return calculate;
    }
  };

  //This Sums Total Value of the Cart With discounted items too
  const sumTotal = () => {
    const newArr: number[] = [];
    myCartItems.map((el) => {
      // if quantity is more than 1 it uses the discount function
      if (el.quantity > 1) {
        const findItem = calculateQuantDiscount(el.productId, el.quantity);
        newArr.push(Number(findItem));
      } else {
        const findItem = calculateNormalPrice(el.productId, el.quantity);
        newArr.push(Number(findItem));
      }
    });
    //gets total value of the cart including the discounted price !
    const TotalValue = newArr.reduce((a: number, b: number) => a + b, 0);
    console.log(TotalValue);
    return TotalValue;
  };
  return (
    <div>
      <button onClick={sumTotal}>SUMM</button>{" "}
      {myCartItems.map((el) => {
        return (
          <div
            key={el.productId}
            style={{ backgroundColor: "lightblue", display: "flex" }}
          >
            <Product productId={el.productId} />
            <span>{el.quantity}</span>
            <p>
              Total Price:
              {calculateQuantDiscount(el.productId, el.quantity)?.toFixed(2)} ,
              Normal({calculateNormalPrice(el.productId, el.quantity)})
            </p>
          </div>
        );
      })}
      Total Price: {sumTotal().toFixed(2)}
    </div>
  );
};

export default MyCart;
