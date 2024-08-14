import { useGetAllClients } from "../../hooks/useClients";

import ClientItem from "./client-item/ClientItem";

export default function AllClient() {
  const [clients] = useGetAllClients();

  return (
    <div className="container-fluid bg-light pt-5">
      <div className="container py-5">
        <div className="d-flex flex-column text-center mb-5">
          <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3"></h3>
          <h4 className="text-secondary mb-3">Our Client</h4>
          <h1 className="display-4 m-0">
            <span className="text-primary">All</span> Pets
          </h1>
        </div>
        <div className="row pb-3">
          {clients.length > 0 ? (
            clients.map((client) => <ClientItem key={client._id} {...client} />)
          ) : (
            <h2>No clients yet</h2>
          )}
        </div>
      </div>
    </div>
  );
}
