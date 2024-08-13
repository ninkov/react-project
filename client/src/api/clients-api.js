import * as request from "./requester";

const BASE_URL = `http://localhost:3030/jsonstore/clients`;

export const getAll = async () => {
  const result = await request.get(BASE_URL);

  const clients = Object.values(result);
  return clients;
};

export const getOne = (clientId) => request.get(`${BASE_URL}/${clientId}`);

const clientsAPI = {
  getOne,
  getAll,
};

export default clientsAPI;
