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

    cashInRequestList: build.query({
      query: () => ({
        url: `/cash-in-request/`,
        method: "GET",
      }),
      providesTags: ["balance-recharge"],
    }),

    withdrawRequestList: build.query({
      query: () => ({
        url: `/withdraw/`,
        method: "GET",
      }),
      providesTags: ["balance-recharge"],
    }),

    cashInRequest: build.mutation({
      query: (regData) => ({
        url: `/cash-in-request/`,
        method: "POST",
        data: regData
      }),
      invalidatesTags: ["balance-recharge"],
      // invalidatesTags: ["user"]
    }),
    withdrawReques: build.mutation({
      query: (regData) => ({
        url: `/withdraw/`,
        method: "POST",
        data: regData
      }),
      invalidatesTags: ["balance-recharge"],
      // invalidatesTags: ["user"]
    }),

  }),

})

export const { useBalanceRequestMutation,useCashInRequestListQuery,useCashInRequestMutation, useWithdrawRequestListQuery,useWithdrawRequesMutation, useBalanceRequestListQuery } = agentApi