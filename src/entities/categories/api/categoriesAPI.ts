//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { ICategoriesResponse } from '../model/types/categoriesTypes';

const categoriesAPI = jsonPlaceholderAPI.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<ICategoriesResponse, { search?: string }>({
      query: ({ search }) => ({
        url: '/categories',
        method: 'GET',
        params: search ? { search } : undefined
      }),
      transformResponse: (response: { data: ICategoriesResponse }) =>
        response?.data,
      providesTags: ['Categories']
    })
  })
});

export const { useGetCategoriesQuery } = categoriesAPI;
