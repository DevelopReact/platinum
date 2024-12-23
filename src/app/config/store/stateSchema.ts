//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { IProduct } from '@/entities/search/model/types/productTypes';
import { ISearchPanel } from '@/entities/search/model/types/searchPanelTypes';

export interface StateSchema {
  [jsonPlaceholderAPI.reducerPath]: ReturnType<
    typeof jsonPlaceholderAPI.reducer
  >;
  products: IProduct[];
  searchPanel: ISearchPanel;
}
