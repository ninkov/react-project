const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Price", href: "/price" },
  { name: "Booking", href: "/booking" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
];

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
              <a 
                key={item.name}
                href={item.href} 
                className="nav-item nav-link"
              >
                {item.name}
              </a>
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
