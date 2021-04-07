import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductDesc } from "../components/Product/Product";
import type { RootState } from "./store";

interface IReduxMainSlice {
  products: IProductDesc[];
  myChildren: { id: number; name: string }[];
}
interface IChangePrice {
  id: number;
  discount: number;
}

// This is the Initial State represents the Products from the Open APi
const initialState: IReduxMainSlice = {
  products: [],
  myChildren: [
    { id: 1, name: "Child 1" },
    { id: 2, name: "Child 2" },
    { id: 3, name: "Child 3" },
    { id: 4, name: "Child 4" },
    { id: 5, name: "Child 5" },
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
