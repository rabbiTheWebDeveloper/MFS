

import { createApi } from '@reduxjs/toolkit/query/react'
import { Base_Url } from "../../constant";
import { axiosBaseQuery } from '../../helpers/axios/axiosBaseQuery';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: Base_Url }),
  endpoints: () => ({}),
  tagTypes: ['user']
})