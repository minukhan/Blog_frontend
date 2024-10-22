import { TOGGLE_PLAY_MODAL } from "../actions/modalActions";

const initialState = {
  isPlayModalOpen: true,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PLAY_MODAL:
      return {
        isPlayModalOpen: !state.isPlayModalOpen,
      };
    default:
      return state;
  }
};

export default modalReducer;
