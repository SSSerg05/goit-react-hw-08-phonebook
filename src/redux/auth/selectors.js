
// User authetification
export const selectUserLoading = state => state.auth.loading;
export const selectUserError = state => state.auth.error;
export const selectToken = state => state.auth.token;
export const selectUserData = state => state.auth.userData;
export const selectAuthetification = state => state.auth.authetification;
export const selectIsRefreshing = state => state.isRefreshing;