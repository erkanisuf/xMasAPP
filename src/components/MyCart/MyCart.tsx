import React, { useState } from "react";

import { useAppSelector } from "../../Redux/hooks";
import ConfirmWindow from "../ConfirmWindow/ConfirmWindow";
import Modal from "../Modal/Modal";
import Product from "../Product/Product";
import CombineWishList from "./CombineWishList";
import MyCartCSS from "./MyCart.module.css";
import { BiSkipPrevious } from "react-icons/bi";
const MyCart = () => {
  const myCartItems = useAppSelector((state) => state.childrens.myCart);
  const disApproved = useAppSelector(
    (state) => state.childrens.ChildrenDiscardedItems
  ); // Redux Approved Childen list
  const AllProducts = useAppSelector((state) => state.main.products); // Redux Approved Childen list
  const [step, setStep] = useState<number>(1);
  console.log(step);
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
        return newArr.push(Number(findItem));
      } else {
        const findItem = calculateNormalPrice(el.productId, el.quantity);
        return newArr.push(Number(findItem));
      }
    });
    //gets total value of the cart including the discounted price !
    const TotalValue = newArr.reduce((a: number, b: number) => a + b, 0);

    return TotalValue;
  };

  if (step === 1) {
    return (
      <Modal>
        <CombineWishList
          setPage={setStep}
          items={myCartItems.length === 0 && disApproved.length === 0}
        />
      </Modal>
    );
  } else
    return (
      <Modal>
        <div className={MyCartCSS.mycartContainer}>
          <div className={MyCartCSS.totalSumContainer}>
            <h1>Approved wishes cart</h1>
            <div>
              <span>Total value:</span>
              <p>{sumTotal().toFixed(2)}€</p>
            </div>
            <button className={MyCartCSS.btnBack} onClick={() => setStep(1)}>
              <BiSkipPrevious />
              Back
            </button>
            <ConfirmWindow />
          </div>
          {myCartItems.length === 0 ? (
            <h2 style={{ textAlign: "center" }}>
              No approved items in cart yet
            </h2>
          ) : (
            ""
          )}
          {myCartItems.map((el) => {
            return (
              <div key={el.productId} className={MyCartCSS.productContainer}>
                <Product productId={el.productId} />

                <div className={MyCartCSS.quantContainer}>
                  <div>
                    <div>Quantity:</div>
                    <p>{el.quantity}</p>{" "}
                  </div>
                  <div>
                    {" "}
                    <div> Normal price:</div>
                    <p>{calculateNormalPrice(el.productId, el.quantity)}€</p>
                  </div>
                  <div>
                    {" "}
                    <div> Price after discount:</div>
                    <p>
                      {el.quantity > 1
                        ? calculateQuantDiscount(
                            el.productId,
                            el.quantity
                          )?.toFixed(2) + "€"
                        : calculateNormalPrice(el.productId, el.quantity) + "€"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    );
};

export default MyCart;
