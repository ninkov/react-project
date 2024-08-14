import { useEffect, useState } from "react";

import clientsAPI from "../api/clients-api";

export function useGetAllClients(){
    const [clients, setClients] = useState([]);
    useEffect(() => {
      (async () => {
        const result = await clientsAPI.getAll();
        setClients(result);
      })();
    }, []);


    return [clients, setClients]
}
export function useGetOneClients(clientsId){

  const [client, setClient] = useState({});

    useEffect(() => {
        (async () => {
          const result = await clientsAPI.getOne(clientsId);
          setClient(result);
        })();
      }, []);
      return [client, setClient]

}