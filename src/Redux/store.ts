import { configureStore } from "@reduxjs/toolkit";
import ChildrensSlice from "./ChildrensSlice";
import MainSlice from "./MainSlice";
// ...

//MAIN: holds the products and the fake array of childrens object
// CHILDREN : holds the approved items and discarded items of the child , laso myCart property that holds the item that customer will  "buy"
export const store = configureStore({
  reducer: { main: MainSlice, childrens: ChildrensSlice },
});

// Redux required setup from Their Docs
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
