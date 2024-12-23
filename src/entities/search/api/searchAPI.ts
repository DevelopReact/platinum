//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import {
  ICategoriesResponse,
  IProduct,
  IProductsResponse
} from '../model/types/productTypes';

const searchAPI = jsonPlaceholderAPI.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<ICategoriesResponse, void>({
      query: () => ({
        url: '/categories',
        method: 'GET'
      }),
      transformResponse: (response: { data: ICategoriesResponse }) =>
        response?.data,
      providesTags: ['Categories']
    }),

    getProducts: build.query<IProductsResponse, void>({
      query: () => ({
        url: '/products',
        method: 'GET'
      }),
      transformResponse: (response: { data: IProductsResponse }) =>
        response?.data,
      providesTags: ['Products']
    }),

    getProductSlug: build.query<IProduct, string>({
      query: (slug) => ({
        url: `/products/${slug}`,
        method: 'GET'
      }),
      transformResponse: (response: { data: any }) => response?.data.item, //item does not exist in IProduct
      providesTags: ['Products']
    })
  })
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useLazyGetProductSlugQuery
} = searchAPI;
