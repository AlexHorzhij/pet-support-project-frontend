export const getUserData = state => state.userData;
export const getUser = state => state.userData.user.user;
export const getPets = state => state.userData.user.pets;
export const isLoading = state => state.userData.isLoading;
export const isLoadingUpdate = state => state.userData.isLoadingUpdate;
export const isUploadingPet = state => state.userData.isUploadingPet;
export const isUpdatingPet = state => state.userData.isUpdatingPet;
export const isDeletingPet = state => state.userData.isDeletingPet;
