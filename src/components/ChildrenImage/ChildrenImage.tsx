import React, { useMemo, useState } from "react";
import { useAppSelector } from "../../Redux/hooks";
import ChildenImageCSS from "./ChildenImageCSS.module.css";
interface IChildrenImage {
  name: number; // This is The ID
}

interface IChild {
  id: number;
  name: string;
  image: string;
}
const ChildrenImage: React.FC<IChildrenImage> = ({ name }) => {
  //Component that shows image and name of children
  const myChildren = useAppSelector((state) => state.main.myChildren); // Redux Main State
  const [child, setChild] = useState<IChild>();

  //finds children information form the Redux
  useMemo(() => {
    const findChild = myChildren.find((el) => el.id === name); // this finds child from Redux by ID
    setChild(findChild);
    return () => {};
  }, [name, myChildren]);

  if (!child) {
    return <p>loading</p>;
  }
  return (
    <div className={ChildenImageCSS.containerChild}>
      <img src={child.image} alt={""} />
      <h1>{child.name}`s wishlist </h1>
    </div>
  );
};

export default ChildrenImage;
