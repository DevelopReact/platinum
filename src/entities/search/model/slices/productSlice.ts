import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../types/productTypes';

const initialState: IProduct[] = [];

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct>) {
      state.push(action.payload);
    },

    updateProducts(state, action: PayloadAction<IProduct[]>) {
      state;
      return action.payload;
    }
  }
});

export const { actions: productAction, reducer: productReducer } = productSlice;
