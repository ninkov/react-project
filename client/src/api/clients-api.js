import request from "./requester";

const BASE_URL = `http://localhost:3030/data/clients`;

 export const getAll = async () => {
  const result = await request.get(BASE_URL);

  const clients = Object.values(result);
  return clients;
};

 export const getOne = (clientId) => request.get(`${BASE_URL}/${clientId}`);

 export const create = (clientData) => request.post(`${BASE_URL}`, clientData);

const clientsAPI = {
  getOne,
  getAll,
  create,
};

export default clientsAPI;
