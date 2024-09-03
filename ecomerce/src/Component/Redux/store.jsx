import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default to localStorage
import cartReducer from "./CartSlice"; // Ensure the path is correct

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    allCart: persistedReducer,
  },
});

export const persistor = persistStore(store);

export default store; // Default export
