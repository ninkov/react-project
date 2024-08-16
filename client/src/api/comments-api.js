import requester from "./requester";
const BASE_URL = `http://localhost:3030/data/comments`;

const create = async (clientId,  text) =>
  requester.post(BASE_URL, { clientId, text });

const getAll = async (clientId) => {
  const result = await requester.get(BASE_URL,(clientId));
  const comments = Object.values(result);
  return comments;
};

const commentsAPI = {
  create,
  getAll,
};

export default commentsAPI;
