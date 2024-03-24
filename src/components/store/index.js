import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import blogSlice from "./blogSlice";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducers = combineReducers({
  blogs: blogSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: true,
});
