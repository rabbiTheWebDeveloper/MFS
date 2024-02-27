import { baseApi } from "./baseApi"
export const agentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    balanceRequest: build.mutation({
      query: (regData) => ({
        url: `/balance-recharge/`,
        method: "POST",
        data: regData
      }),
      providesTags: ["balance"],
      // invalidatesTags: ["user"]
    }),
    balanceRequestList: build.query({
      query: () => ({
        url: `/balance-recharge/`,
        method: "GET",
      }),
      providesTags: ["history"],
    }),

  }),

})

export const { useBalanceRequestMutation, useBalanceRequestListQuery } = agentApi