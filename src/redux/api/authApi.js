import { baseApi } from "./baseApi"
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/users/signin`,
        method: "POST",
        data: loginData
      }),
      invalidatesTags: ["user"]
    }),
    userRegister: build.mutation({
      query: (regData) => ({
        url: `/users/signup`,
        method: "POST",
        data: regData
      }),
      invalidatesTags: ["user"]
    }),
  }),

})

export const { useUserLoginMutation, useUserRegisterMutation } = authApi