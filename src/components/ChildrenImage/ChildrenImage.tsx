import React from "react";
import ChildenImageCSS from "./ChildenImageCSS.module.css";
interface IChildrenImage {
  image: string;
  name: string;
}
const ChildrenImage: React.FC<IChildrenImage> = ({ image, name }) => {
  return (
    <div className={ChildenImageCSS.containerChild}>
      <img src={image} alt={image} />
      <h1>{name}`s wishlist </h1>
    </div>
  );
};

export default ChildrenImage;
