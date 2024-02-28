import { baseApi } from "./baseApi"
export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userStatus: build.mutation({
      query: (data) => ({
        url: `/admin/user-update/${ data.id}`,
        method: "POST",
        data: data.body
      }),
      invalidatesTags: ["balance-recharge"],
      // invalidatesTags: ["user"]
    }),
    agentApprove: build.mutation({
      query: (data) => ({
        url: `/admin/agent-update/${data.id}`,
        method: "POST",
        data: data.body
      }),
      invalidatesTags: ["balance-recharge"],
      // invalidatesTags: ["user"]
    }),

    rechargeAcceped: build.mutation({
      query: (data) => ({
        url: `/balance-recharge/${data.id}`,
        method: "PUT",
        data: data.body
      }),
      invalidatesTags: ["balance-recharge-list"],

      // invalidatesTags: ["user"]
    }),

    userList: build.query({
      query: () => ({
        url: `/admin/user-list`,
        method: "GET",
      }),
      providesTags: ["balance-recharge"],
    }),
    agentList: build.query({
      query: () => ({
        url: `/admin/agent-list`,
        method: "GET",
      }),
      providesTags: ["balance-recharge"],
    }),
    balanceRechargeList: build.query({
      query: () => ({
        url: `/balance-recharge/admin`,
        method: "GET",
      }),
      providesTags: ["balance-recharge-list"],

    }),
    cashOutAdminTOAgent: build.mutation({
      query: (regData) => ({
        url: `admin/cash-out-admin-to-agent`,
        method: "POST",
        data: regData
      }),
      // invalidatesTags: ["balance-recharge"],
      // invalidatesTags: ["user"]
    }),
    cashOutAdminTOUser: build.mutation({
      query: (regData) => ({
        url: `admin/cash-out-admin-to-user`,
        method: "POST",
        data: regData
      }),
      // invalidatesTags: ["balance-recharge"],
      // invalidatesTags: ["user"]
    }),
    cashinApprove: build.mutation({
      query: (data) => ({
        url: `/cash-in-request/${data.id}`,
        method: "PUT",
        data: data.body
      }),
      invalidatesTags: ["balance-recharge"],
      // invalidatesTags: ["user"]
    }),
    withdrowApprove: build.mutation({
      query: (data) => ({
        url: `/withdraw/${data.id}`,
        method: "PUT",
        data: data.body
      }),
      invalidatesTags: ["balance-recharge"],
      // invalidatesTags: ["user"]
    }),
    withdrowAminList: build.query({
      query: () => ({
        url: `/withdraw/admin`,
        method: "GET",
      }),
      providesTags: ["balance-recharge-list"],

    }),
    cashInAminList: build.query({
      query: () => ({
        url: `/cash-in-request/admin`,
        method: "GET",
      }),
      providesTags: ["balance-recharge-list"],

    }),

  }),

})

export const { useCashInAminListQuery,useCashinApproveMutation,useWithdrowAminListQuery,useWithdrowApproveMutation, useUserStatusMutation, useAgentApproveMutation, useCashOutAdminTOAgentMutation, useCashOutAdminTOUserMutation, useUserListQuery, useAgentListQuery, useRechargeAccepedMutation, useBalanceRechargeListQuery } = adminApi