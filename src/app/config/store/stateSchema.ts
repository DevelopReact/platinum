//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { IProductsResponse } from '@/entities/search/model/types/productTypes';

export interface StateSchema {
  [jsonPlaceholderAPI.reducerPath]: ReturnType<
    typeof jsonPlaceholderAPI.reducer
  >;
  products: IProductsResponse;
}
