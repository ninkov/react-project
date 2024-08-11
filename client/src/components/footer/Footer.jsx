import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "AllClient", to: "/clients" },
  { name: "Price", to: "/price" },
  { name: "Booking", to: "/booking" },
];
export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-4 col-md-12 mb-5">
            <h1 className="mb-3 display-5 text-capitalize text-white">
              <span className="text-primary">Groo</span>ming
            </h1>
            <p className="m-0">
              Pet grooming is a vital part of pet care that involves maintaining
              and improving a pets appearance and health through services like
              bathing, cutting, brushing, nail trimming, and ear cleaning.
              Regular grooming appointments contribute to happier, healthier,
              and more comfortable pets, making it an essential aspect of
              responsible pet ownership.
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-primary mb-4">Get In Touch</h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>123 Street,
                  Burgas, Bulgaria
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>info@example.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "36px", height: "36px" }}
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "36px", height: "36px" }}
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "36px", height: "36px" }}
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "36px", height: "36px" }}
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-primary mb-4">Popular Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  {navigation.map((item) => (
                    <Link
                      to={item.to}
                      key={item.name}
                      className="text-white mb-2 "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white py-4 px-sm-3 px-md-5"
        style={{ background: "#111111" }}
      >
        <div className="row">
          <div className="col-md text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy;{" "}
              <Link className="text-white font-weight-bold" to="/">
                Groomin
              </Link>
              . All Rights Reserved. Designed
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
