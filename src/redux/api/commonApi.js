import { baseApi } from "./baseApi"
export const commonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    balance: build.mutation({
      query: () => ({
        url: `/transaction/balance`,
        method: "POST",
        // data: regData
      }),
      // invalidatesTags: ["user"]
    }),

  }),

})

export const {useBalanceMutation } = commonApi