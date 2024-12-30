import { StateSchema } from '@/app/config/store/stateSchema';

export const getProductsCartState = (state: StateSchema) =>
  state.products.products;
