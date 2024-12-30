import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import { IProduct, ProductStateSchema } from '../types/productTypes';

const initialState: ProductStateSchema = {
  products: []
};

const productCartSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setProductCart(state, action: PayloadAction<IProduct>) {
      const isProductAlreadyExist = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (isProductAlreadyExist) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                count: product.count! + 1
              }
            : product
        );
      }

      if (!isProductAlreadyExist) {
        state.products.push({ ...action.payload, count: 1 });
      }
    },

    updateProductsCart(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    }
  }
});

export const { actions: productCartAction, reducer: productCartReducer } =
  productCartSlice;
