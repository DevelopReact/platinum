//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import {
  ICategoriesResponse,
  IProductsResponse
} from '../model/types/productTypes';

const searchAPI = jsonPlaceholderAPI.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<ICategoriesResponse, void>({
      query: () => ({
        url: '/categories',
        method: 'GET'
      }),
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
    })
  })
});

export const { useGetCategoriesQuery, useGetProductsQuery } = searchAPI;
