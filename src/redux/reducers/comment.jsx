const init = {
  //   postingUserId: "",
  //   postingPostId: "",
  comments: [],
};

const CommentReducer = (state = init, action) => {
  // state : store에 저장되는 값
  // action: type,payload(변경되는 값)

  switch (action.type) {
    case "UPDATE_INFO":
      return {
        ...state,
        postingUserId: action.payload.userId,
        postingPostId: action.payload.postId,
      };

    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case "REMOVE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(
          (item) => item.commentId !== action.payload.commentId
        ),
      };

    case "UPDATE_COMMENT":
      return {
        ...state,
        comments: state.comments.map((item) =>
          item.commentId === action.payload.commentId
            ? { ...item, content: action.payload.content }
            : item
        ),
      };

    default:
      return state;
  }
};

export default CommentReducer;
