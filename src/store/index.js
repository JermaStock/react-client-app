import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import clientsReducer from "./clientsSlice";
import filterReducer from "./filterSlice";
import modalReducer from "./modalSlice";
import formReducer from "./formSlice";

const rootReducer = combineReducers({
  clients: clientsReducer,
  filter: filterReducer,
  modal: modalReducer,
  form: formReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['clients', 'form'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
