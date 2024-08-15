import { useContext } from 'react';
import{Link} from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext';

const authNavigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "AllClient", to: "/clients" },
  
  { name: "Logout", to: "/logout" },
  { name: "Create", to: "/create" },

];
const notAuthNavigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "AllClient", to: "/clients" },
  { name: "Login", to: "/login" },
  { name: "Register", to: "/register" },
];


export default function Navbar() {
  const {isAuthenticated}=useContext(AuthContext)
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
        <a href="#" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-5 text-capitalize font-italic text-white">
            <span className="text-primary">Groo</span>ming
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

          {!isAuthenticated ? (
            <div className="navbar-nav mr-auto py-0">
              {notAuthNavigation.map((item) => (
                <Link 
                  key={item.name}
                  to={item.to} 
                  className="nav-item nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className="navbar-nav mr-auto py-0">
              {authNavigation.map((item) => (
                <Link 
                  key={item.name}
                  to={item.to} 
                  className="nav-item nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        
      </nav>
    </div>
  );
}
