export const TOGGLE_PLAY_MODAL = "TOGGLE_PLAY_FULL_MODAL";
// export const togglePlayModal = () => ({
//   type: TOGGLE_PLAY_MODAL,
// });
export const togglePlayModal = () => {
  console.log("togglePlayModal called"); // 로그 추가
  return {
    type: TOGGLE_PLAY_MODAL,
  };
};
