export const getUserData = state => state.userData;
export const getUser = state => state.userData.user.user;
export const isLoading = state => state.userData.isLoading;
export const isLoadingUpdate = state => state.userData.isLoadingUpdate;
export const isLoadingUpdatePet = state => state.userData.isLoadingUpdatePet;
export const isDeletingPet = state => state.userData.isDeletingPet;
