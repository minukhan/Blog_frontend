import axios from "axios";

export const addPostToPlaylist = (userId, postId, playListDto) => {
  return axios.post(`/api/playlist/${userId}`, playListDto, {
    params: { postId },
  });
};

export const getAllPlaylists = (userId) => {
  return axios.get(`/api/playlist/${userId}`);
};

export const deletePlaylist = (userId, playListId) => {
  return axios.delete(`/api/playlist/${userId}/${playListId}`);
};
