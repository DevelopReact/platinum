//redux
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
//reducers
import { productReducer } from '@/entities/search/model/slices/productSlice';
//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { StateSchema } from './stateSchema';

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    [jsonPlaceholderAPI.reducerPath]: jsonPlaceholderAPI.reducer,
    products: productReducer
  };

  const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jsonPlaceholderAPI.middleware)
  });

  return store;
};
