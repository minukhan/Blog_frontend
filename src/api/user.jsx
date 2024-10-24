import axios from "axios";

const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/users`;

// export const getList = async (pageParam) => {
//   const { page, size } = pageParam;
//   const res = await axios.get(`${prefix}/list`, {
//     params: { page: page, size: size },
//   });
//   return res.data;
// };

// export const getOne = async (tno) => {
//   const res = await axios.get(`${prefix}/${tno}`);
//   return res.data;
// };

// export const postAdd = async (obj) => {
//   const res = await axios.post(`${prefix}/`, obj);
//   return res.data;
// };
