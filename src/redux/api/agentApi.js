import { baseApi } from "./baseApi"
export const agentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    balanceRequest: build.mutation({
      query: (regData) => ({
        url: `/balance-recharge/`,
        method: "POST",
        data: regData
      }),
      invalidatesTags: ["balance-recharge"],
      // invalidatesTags: ["user"]
    }),
    balanceRequestList: build.query({
      query: () => ({
        url: `/balance-recharge/`,
        method: "GET",
      }),
      providesTags: ["balance-recharge"],
    }),

  }),

})

export const { useBalanceRequestMutation, useBalanceRequestListQuery } = agentApi