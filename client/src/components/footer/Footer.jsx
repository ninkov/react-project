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
              and improving a pet's appearance and health through services like
              bathing, cutting, brushing, nail trimming, and ear cleaning.
              Professional groomers, who are trained in animal behavior,
              anatomy, and physiology, use specialized tools and techniques to
              cater to each pet's unique needs, promoting overall well-being and
              early detection of potential health issues. In addition to basic
              grooming, some professionals offer spa treatments and aesthetic
              services to enhance pets' appearances and boost their confidence.
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
                  <i className="fa fa-map-marker-alt mr-2"></i>123 Street, Burgas, Bulgaria
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
                    style={{width: "36px", height: "36px"}}
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{width: "36px", height: "36px"}}
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{width: "36px", height: "36px"}}
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{width: "36px", height: "36px"}}
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-primary mb-4">Popular Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>About Us
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Our Services
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Our Team
                  </a>
                  <a className="text-white" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-primary mb-4">Newsletter</h5>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-lg btn-primary btn-block border-0"
                      type="submit"
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white py-4 px-sm-3 px-md-5"
        style={{background: "#111111"}}
      >
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy;{" "}
              <a className="text-white font-weight-bold" href="#">
                Your Site Name
              </a>
              . All Rights Reserved. Designed by
              <a
                className="text-white font-weight-bold"
                href="https://htmlcodex.com"
              >
                HTML Codex
              </a>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
