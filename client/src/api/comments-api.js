import requester from "./requester";
const BASE_URL = `http://localhost:3030/jsonstore/clients`;

const buildUrl = (clientId) => `${BASE_URL}/${clientId}/comments`;
const create = async (clientId, username, text) => {
  const result = await requester.post(buildUrl(clientId), { username, text });
 return result
};

const getAll = async (clientId) => {
  const result = await requester.get(buildUrl(clientId));
  const comments = Object.values(result);
  return comments;
};
export default {
  create,
  getAll,
};
