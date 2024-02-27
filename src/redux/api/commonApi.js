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
    history: build.query({
      query: () => ({
        url: `/transaction/transaction-list`,
        method: "GET",
      }),
      providesTags: ["history"],
    }),

  }),

})

export const { useBalanceMutation , useHistoryQuery } = commonApi