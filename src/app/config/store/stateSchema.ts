//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { ProductStateSchema } from '@/entities/products/model/types/productTypes';

export interface StateSchema {
  [jsonPlaceholderAPI.reducerPath]: ReturnType<
    typeof jsonPlaceholderAPI.reducer
  >;
  products: ProductStateSchema;
}
