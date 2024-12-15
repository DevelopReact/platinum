import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductsResponse } from '../types/productTypes';

const initialState: IProductsResponse = {
  statistic: {
    products_count: 0,
    min_price: 0,
    max_price: 0,
    attributes: [
      {
        id: 0,
        slug: '',
        name: '',
        options: [
          {
            id: 0,
            slug: '',
            name: '',
            products_count: 0,
            color_hex: ''
          }
        ]
      }
    ]
  },
  items: []
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct>) {
      state.items.push(action.payload);
    }
  }
});

export const { actions: productAction, reducer: productReducer } = productSlice;
