import React, { useEffect } from "react";
import ChildComp from "./ChildComp/ChildComp";
import { v4 as uuidv4 } from "uuid";
import { IProductDesc } from "./Product/Product";
import { useFetch } from "../Hooks/useFetch";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { addProductsFromApi } from "../Redux/MainSlice";
import Spinner from "./Spinner/Spinner";

export interface IuseFetchAllProducts {
  response: IProductDesc[];
  isLoading: boolean;
  error: any;
}
const Main = () => {
  const myChildren = useAppSelector((state) => state.main.myChildren); // Redux Main State
  const dispatch = useAppDispatch(); // Redux Hook
  const { response, isLoading, error }: IuseFetchAllProducts = useFetch(
    "https://fakestoreapi.com/products/"
  ); //UseFetch Custom Hook for data from API

  useEffect(() => {
    //Fetches all products from the Api , adds them to Global state so the <Product /> component can find them by the ID
    dispatch(addProductsFromApi(response));
  }, [response, dispatch]);
  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return (
      <h1 style={{ textAlign: "center", color: "red" }}>
        Error. Something went wrong!
      </h1>
    );
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        height: "100%",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      {myChildren.map((el) => {
        return (
          <ChildComp
            key={uuidv4()}
            childname={el.id}
            fetchURL={`https://fakestoreapi.com/carts/${el.id}`}
          />
        );
      })}
    </div>
  );
};

export default Main;
