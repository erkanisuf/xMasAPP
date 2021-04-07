import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../components/ChildComp/ChildComp";
import { IProduct } from "../components/Product/Product";
import type { RootState } from "./store";

interface IReduxChildrenSlice {
  ChildrenApprovedItems: OBJtoAPI[];
  ChildrenDiscardedItems: OBJtoAPI[];
}
export interface OBJtoAPI {
  userId: number;
  date: Date | string;
  products: Product[];
}
// This is the Initial State represents the Products from the Open APi
const initialState: IReduxChildrenSlice = {
  ChildrenApprovedItems: [],
  ChildrenDiscardedItems: [],
};

export const ChildrensSlice = createSlice({
  name: "childrenSlice",
  //Redux Info
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    //Redux Tips
    // Use the PayloadAction type to declare the contents of `action.payload`
    ChildProductToApproved: (state, action: PayloadAction<OBJtoAPI>) => {
      const copyApprovedState = [...state.ChildrenApprovedItems];
      const findIndex = copyApprovedState.findIndex(
        (el) => el.userId === action.payload.userId
      );
      //If the user is already there , it finds its index and just updates the products array.
      if (findIndex !== -1) {
        copyApprovedState[findIndex].products.push(action.payload.products[0]);
      } else {
        copyApprovedState.push(action.payload);
      }

      state.ChildrenApprovedItems = copyApprovedState;
    },
    ChildProductToDiscarded: (state, action: PayloadAction<OBJtoAPI>) => {
      const copyDiscardedState = [...state.ChildrenDiscardedItems];
      const findIndex = copyDiscardedState.findIndex(
        (el) => el.userId === action.payload.userId
      );
      //If the user is already there , it finds its index and just updates the products array.
      if (findIndex != -1) {
        copyDiscardedState[findIndex].products.push(action.payload.products[0]);
      } else {
        copyDiscardedState.push(action.payload);
      }

      state.ChildrenDiscardedItems = copyDiscardedState;
    },
  },
});

export const {
  ChildProductToApproved,
  ChildProductToDiscarded,
} = ChildrensSlice.actions;

//Redux Setup from their Docs.
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default ChildrensSlice.reducer;
