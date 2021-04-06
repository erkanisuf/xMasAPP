import React from "react";
import { useFetch } from "../../Hooks/useFetch"; // Custom Hook for Fetching Data
import ProductCSS from "./Product.module.css"; // Styling
import { GrFormCheckmark } from "react-icons/gr"; //Icon
import { IoMdClose } from "react-icons/io"; //Icon

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface IProductProp {
  productId: string | number;
}

export interface IuseFetch {
  response: IProduct;
  isLoading: boolean;
  error: any;
}
const Product: React.FC<IProductProp> = ({ productId }) => {
  const { response, isLoading, error }: IuseFetch = useFetch(
    `https://fakestoreapi.com/products/${productId.toString()}`
  );

  return (
    <div className={ProductCSS.productContainer}>
      <div>
        <img src={response?.image} alt={response?.title} />
      </div>
      <div>
        <div>
          <p>{response?.title}</p>
        </div>
        <div>
          {" "}
          <span>{response?.price} €</span>
        </div>
        <div className={ProductCSS.buttonsContainer}>
          <button className={ProductCSS.approve}>
            <GrFormCheckmark size="25px" />
          </button>
          <button className={ProductCSS.disapprove}>
            <IoMdClose size="25px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
