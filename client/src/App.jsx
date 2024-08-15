
import { Routes, Route } from "react-router-dom";

import AboutUs from "./components/about-us/AboutUs";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Carousel from "./components/header/carousel/Carousel";
import AllClient from "./components/all-client/AllClient";
import NotFound from "./components/notFound/NotFound";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ClientDetails from "./components/client-details/ClientDetails";
import CLientCreate from "./components/client-create/ClientCreate";
import { AuthContextProvider } from "./context/AuthContext";
import Logout from "./components/logout/Logout";

function App() {


 

  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Carousel />} />
     
        <Route path="/about" element={<AboutUs />} />
        <Route path="/clients" element={<AllClient />} />
        <Route path="/clients/:clientsId/details" element={<ClientDetails />} />
        <Route path="/create" element={<CLientCreate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
