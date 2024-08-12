import { Link } from "react-router-dom";

export default function ClientItem({
  _id,
  name,
  breed,
  imageUrl,
  healthStatus,
  personality,
}) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
        <h3 className="mb-3">{name}</h3>
        <img src={imageUrl} alt={name} />
        <p> </p>
        <h6>{healthStatus}</h6>

        <Link
          className="btn btn-lg btn-primary px-3 d-none d-lg-block"
          to={`/clients/${_id}/details`}
        >
          Details
        </Link>
      </div>
    </div>
  );
}
