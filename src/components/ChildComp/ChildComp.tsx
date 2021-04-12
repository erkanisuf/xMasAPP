import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import ChildCSS from "./Child.module.css";
import { v4 as uuidv4 } from "uuid";
import { GrFormCheckmark } from "react-icons/gr"; //Icon
import { IoMdClose } from "react-icons/io"; //Icon

import { useFetch } from "../../Hooks/useFetch";
import Approved from "../Approved/Approved";
import Discarded from "../Discarded/Discarded";
import { useAppSelector } from "../../Redux/hooks";
import {
  AddItemToMyCart,
  ChildProductToApproved,
  ChildProductToDiscarded,
} from "../../Redux/ChildrensSlice";
import { useDispatch } from "react-redux";
import { changeProductPrice } from "../../Redux/MainSlice";
import ChildrenImage from "../ChildrenImage/ChildrenImage";
import Spinner from "../Spinner/Spinner";
import useWidth from "../../Hooks/useWidth";

export interface IChildCompProp {
  childname: number;
  fetchURL: string;
}
export interface IProduct {
  productId: number;
  quantity: number;
}
export interface ICart {
  id: number;
  userId: number;
  date: Date;
  products: IProduct[];
  __v: number;
}

//interface for fetching data from API
export interface IFetchCart {
  response: ICart;
  isLoading: boolean;
  error: any;
}
const ChildComp: React.FC<IChildCompProp> = ({ childname, fetchURL }) => {
  // const { width } = useWidth(); // custom hook for width check (and height)
  const width = window.innerWidth;
  const dispatch = useDispatch();
  const allApproved = useAppSelector(
    (state) => state.childrens.ChildrenApprovedItems
  ); // Redux Approved Childen list
  const { response, isLoading, error }: IFetchCart = useFetch(`${fetchURL}`); //Custom Hook fetches data

  const [cart, setCart] = useState<ICart>(response); // Main items on Container(cart items from the API)
  const [approved, setApproved] = useState<IProduct[]>([]); // Approved items of wish list , passed to Approved component
  const [discarded, setDiscarded] = useState<IProduct[]>([]); // Disapproved items of wish list , passed to Disapproved component

  //AddsCart for teach children after useFetch returns response .
  useEffect(() => {
    setCart(response);
    return () => setCart(response); // Memory Leak fix
  }, [response]);

  //Remove Product from Main Cart Container
  const RemoveProductFromContainer = (param: IProduct) => {
    const copiedCart = { ...cart };
    const findIndex = copiedCart.products?.findIndex(
      (el) => el.productId === param.productId
    );
    if (findIndex !== undefined && findIndex !== -1) {
      copiedCart.products?.splice(findIndex, 1);
      setCart(copiedCart);
    }
  };

  // Function adds the item to Approved state and component
  const ApproveProduct = (param: IProduct) => {
    //First Adds to Approved State
    const copiedState = [...approved, param];
    setApproved(copiedState);
    // Then Removes the item from the Cart container
    RemoveProductFromContainer(param);

    //To redux Approved with child`s id (name)
    dispatch(
      ChildProductToApproved({
        userId: cart.id,
        date: cart.date,
        products: [param],
      })
    );
    //discount % to redux
    discountProduct(param.productId);
    //to my cart so i can combine in MyCart component later
    dispatch(
      AddItemToMyCart({ productId: param.productId, quantity: param.quantity })
    );
  };

  // Function adds the item to Discarded whish list products.
  const DiscardProduct = (param: IProduct) => {
    //First Adds to Approved State
    const copiedState = [...discarded, param];
    setDiscarded(copiedState);
    // Then Removes the item from the Cart container
    RemoveProductFromContainer(param);
    dispatch(
      ChildProductToDiscarded({
        userId: cart.id,
        date: cart.date,
        products: [param],
      })
    );
  };

  //Adds To the Rexu state % discount of product
  const discountProduct = (param: number) => {
    const allProducts: any[] = [];
    allApproved.map((el) => el.products.map((z) => allProducts.push(z)));
    const howmanyItems = allProducts.filter(
      (el: any) => el.productId === param
    );
    if (howmanyItems.length) {
      dispatch(
        changeProductPrice({
          id: param,
          discount: (howmanyItems.length + 1) * 10,
        })
      );
    }
  };

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return (
      <h1 style={{ textAlign: "center", color: "red" }}>
        !Error. Something went wrong!
      </h1>
    );
  }
  return (
    <div className={ChildCSS.wishListContainer}>
      <ChildrenImage name={childname} />
      <div className={ChildCSS.childContainerProducts}>
        {cart?.products.map((el) => {
          return (
            <div className={ChildCSS.itemContainer} key={uuidv4()}>
              <Product productId={el.productId ? el.productId : 0} />
              <div className={ChildCSS.buttonsContainer}>
                <button
                  data-testid="approvebtn"
                  className={ChildCSS.approve}
                  onClick={() => ApproveProduct(el)}
                >
                  <GrFormCheckmark size="25px" />
                </button>
                <button
                  data-testid="discardbtn"
                  className={ChildCSS.disapprove}
                  onClick={() => DiscardProduct(el)}
                >
                  <IoMdClose size="25px" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: width > 1024 ? "row" : "column",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Approved approvedItems={approved} />
        <Discarded discardedItems={discarded} />
      </div>
    </div>
  );
};

export default React.memo(ChildComp);
