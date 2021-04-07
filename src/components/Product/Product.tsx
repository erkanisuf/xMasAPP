import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Redux/hooks";
import ProductCSS from "./Product.module.css"; // Styling

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  discount?: number;
}

export interface IProductProp {
  productId: number;
}

export interface IuseFetch {
  response: IProduct;
  isLoading: boolean;
  error: any;
}
//Products are searched from the redux main state with .fid(), another alternative would be to fetch single product from the API but it feels slower.
const Product: React.FC<IProductProp> = ({ productId }) => {
  const allMainStateProducts = useAppSelector((state) => state.main.products); // Redux Approved Childen list
  const reduxState = useAppSelector((state) => state.main); // Redux Hook of State
  const reduxStateProducts = useAppSelector((state) => state.childrens); // Redux Hook of State
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    //Finds the product from the State
    const findItemFromState = () => {
      const findProduct = reduxState.products.find((el) => el.id === productId);
      setProduct(findProduct);
    };
    findItemFromState();

    return () => {};
  }, [
    productId,
    reduxState.products,
    reduxStateProducts,
    allMainStateProducts,
  ]);

  return (
    <div className={ProductCSS.productContainer}>
      <div>
        <img src={product?.image} alt={product?.title} />
      </div>
      <div>
        <div>
          <p>{product?.title}</p>
        </div>
        <div>
          {" "}
          <span>{product?.price.toFixed(2)} €</span>
          {product?.discount ? (
            <span style={{ color: "red" }}>{product.discount}%</span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Product);
