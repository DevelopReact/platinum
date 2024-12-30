//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { IProduct, IProductsResponse } from '../model/types/productTypes';

const productsAPI = jsonPlaceholderAPI.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IProductsResponse, { search?: string }>({
      query: ({ search }) => ({
        url: '/products',
        method: 'GET',
        params: search ? { search } : undefined
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

export const { useGetProductsQuery, useLazyGetProductSlugQuery } = productsAPI;
