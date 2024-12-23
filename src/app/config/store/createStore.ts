//redux
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
//reducers
import {
  productReducer,
  searchPanelReducer
} from '@/entities/search/model/slices';
//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { StateSchema } from './stateSchema';

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    [jsonPlaceholderAPI.reducerPath]: jsonPlaceholderAPI.reducer,
    products: productReducer,
    searchPanel: searchPanelReducer
  };

  const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jsonPlaceholderAPI.middleware)
  });

  return store;
};
