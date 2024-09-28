import { apiPaths } from "@/paths";
import apiSlice from "@/store/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    createUser: builder.mutation({
      query: (payload: {
        fullName: string;
        email: string;
        password: string;
      }) => ({
        url: apiPaths.user.signup,
        method: "POST",
        body: payload,
      }),
    }),
    loginUser: builder.mutation({
      query: (payload: { email: string; password: string }) => ({
        url: apiPaths.user.login,
        method: "POST",
        body: payload,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (payload: { email: string }) => ({
        url: apiPaths.user.forgetPassword,
        method: "POST",
        body: payload,
      }),
    }),
    resetPassword: builder.mutation({
      query: (payload: { password: string; token: string }) => ({
        url: apiPaths.user.resetPassword,
        method: "POST",
        body: payload,
      }),
    }),
    updateProfile: builder.mutation({
      query: (payload: any) => ({
        url: apiPaths.user.updateProfile,
        method: "PUT",
        body: payload,
      }),
    }),
    updateEmail: builder.mutation({
      query: (payload: { email: string }) => ({
        url: apiPaths.user.updateEmail,
        method: "PUT",
        body: payload,
      }),
    }),
    updatePassword: builder.mutation({
      query: (payload: { password: string; newPassword: string }) => ({
        url: apiPaths.user.updatePassword,
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
  useUpdateEmailMutation,
  useUpdatePasswordMutation,
} = authApiSlice;
