export const paths = {
  public: {
    signIn: "/login",
    signUp: "/register",
    emailVerify: "/email-verified",
    forgetPassword: "/forgot-password",
    resetPassword: "/reset-password",
  },
  private: {
    dashboard: "/dashboard",
    note: "/dashboard/note",
    emailVerified: "/email-verified",
    resetPassword: "/reset-password",
    setting: "/dashboard/settings",
    logout: "/logout",
  },
  common: {
    home: "/",
    tnc: "/tnc",
    error: "/500-error",
  },
} as const;

export const apiPaths = {
  user: {
    signup: "/user",
    login: "/user/login",
    forgetPassword: "/user/forget-password",
    resetPassword: "/user/reset-password",
    updateProfile: "/user",
    updatePassword: "/user/password",
    updateEmail: "/user/email",
    verifyEmail: "/user/verify-email",
    verifySession: "/user/verify-session",
    verifyForgetPassword: "/user/forget-password/verify",
  },
} as const;
