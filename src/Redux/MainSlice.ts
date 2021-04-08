import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductDesc } from "../components/Product/Product";
import type { RootState } from "./store";

interface IReduxMainSlice {
  products: IProductDesc[];
  myChildren: { id: number; name: string; image: string }[];
}
interface IChangePrice {
  id: number;
  discount: number;
}

// This is the Initial State represents the Products from the Open APi
const initialState: IReduxMainSlice = {
  products: [],
  myChildren: [
    {
      id: 1,
      name: "Pekka",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVY3efFyktSBShjhBcNUt2JuH3F1r0qnlt1g&usqp=CAU",
    },
    {
      id: 2,
      name: "Mikko",
      image:
        "https://www.pngitem.com/pimgs/m/424-4240458_one-ok-rock-stand-out-fit-in-from.png",
    },
    {
      id: 3,
      name: "Juha",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBkq9ItXGCTqTIW4BdBlaEpZQVllKv8gkQGpdhVwfbAIuj9-4yOzapTjdNE0r14wSJoE&usqp=CAU",
    },
    {
      id: 4,
      name: "Jonna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCT3cJxdz3-ntu8ixFRexArdaknweGrBQrw&usqp=CAU",
    },
    {
      id: 5,
      name: "Erkku",
      image:
        "https://st4.depositphotos.com/18690434/20926/v/450/depositphotos_209266078-stock-illustration-boy-kid-avatar-icon-vector.jpg",
    },
  ],
};

export const MainSlice = createSlice({
  name: "main",
  //Redux Info
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    //Redux Tips
    // Use the PayloadAction type to declare the contents of `action.payload`
    addProductsFromApi: (state, action: PayloadAction<IProductDesc[]>) => {
      state.products = action.payload;
    },
    changeProductPrice: (state, action: PayloadAction<IChangePrice>) => {
      const copyProducts = [...state.products];
      const findIndex = copyProducts.findIndex(
        (el) => el.id === action.payload.id
      );
      //Discount if more than 1 quantity
      if (findIndex !== -1) {
        copyProducts[findIndex] = {
          ...copyProducts[findIndex],
          discount: action.payload.discount,
        };
      }
      state.products = copyProducts;
    },
  },
});

export const { addProductsFromApi, changeProductPrice } = MainSlice.actions;

//Redux Setup from their Docs.
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default MainSlice.reducer;
