import { baseApi } from "./baseApi"
export const commonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    balance: build.mutation({
      query: () => ({
        url: `/transaction/balance`,
        method: "POST",
        // data: regData
      }),
      providesTags: ["balance"],
      // invalidatesTags: ["user"]
    }),
    history: build.query({
      query: () => ({
        url: `/transaction/transaction-list`,
        method: "GET",
      }),
      providesTags: ["history"],
    }),

    sendMoney: build.mutation({
      query: (data) => ({
        url: `/transaction/sentMoney`,
        method: "POST",
        data: data
      }),
      invalidatesTags: ["balance"]
    }),
    cashOutAgent: build.mutation({
      query: (data) => ({
        url: `/transaction/cashOut`,
        method: "POST",
        data: data
      }),
      invalidatesTags: ["balance"]
    }),
    cashOutAdmin: build.mutation({
      query: (data) => ({
        url: `/admin/cash-out-admin`,
        method: "POST",
        data: data
      }),
      invalidatesTags: ["balance"]
    }),
    cashInAgentToUser: build.mutation({
      query: (data) => ({
        url: `/transaction/cash-in-agent`,
        method: "POST",
        data: data
      }),
      invalidatesTags: ["balance"]
    }),

  }),

})

export const { useBalanceMutation , useHistoryQuery, useSendMoneyMutation , useCashInAgentToUserMutation, useCashOutAgentMutation , useCashOutAdminMutation } = commonApi