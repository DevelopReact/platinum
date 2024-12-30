//redux
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
//reducers
import { productCartReducer } from '@/entities/products/model/slice/productCartSlice';
//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { StateSchema } from './stateSchema';

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    [jsonPlaceholderAPI.reducerPath]: jsonPlaceholderAPI.reducer,
    products: productCartReducer
  };

  const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jsonPlaceholderAPI.middleware)
  });

  return store;
};
