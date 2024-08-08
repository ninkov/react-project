export default function TopBar() {
  return (
    <div className="container-fluid">
      
      <div className="row py-3 px-lg-5">
        <div className="col-lg-4">
          <a href="" className="navbar-brand d-none d-lg-block">
            <h1 className="m-0 display-5 text-capitalize">
              <span className="text-primary">Groo</span>ming
            </h1>
            

          </a>
        </div>
        <div className="col-lg-8 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <div className="d-inline-flex flex-column text-center pr-3 border-right">
              <h6>Opening Hours</h6>
              <p className="m-0">8.00AM - 18.30PM</p>
            </div>
            <div className="d-inline-flex flex-column text-center px-3 border-right">
              <h6>Email Us</h6>
              <p className="m-0">vet@plus.com</p>
            </div>
            <div className="d-inline-flex flex-column text-center pl-3">
              <h6>Call Us</h6>
              <p className="m-0">+012 345 6789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
