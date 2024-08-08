const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Service", to: "/service" },
  { name: "Price", to: "/price" },
  { name: "Booking", to: "/booking" },
//   { name: "Contact", to: "/contact" },
  { name: "Login", to: "/login" },
  { name: "Register", to: "/register" },
];

import{Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
        <a href="" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-5 text-capitalize font-italic text-white">
            <span className="text-primary">Safety</span>First
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto py-0">
            {navigation.map((item) => (
              <Link 
                key={item.name}
                to={item.to} 
                className="nav-item nav-link"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <a href="#" className="btn btn-lg btn-primary px-3 d-none d-lg-block">
            Get Quote
          </a>
        </div>
      </nav>
    </div>
  );
}
