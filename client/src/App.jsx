import { Routes, Route } from "react-router-dom";

import AboutUs from "./components/about-us/AboutUs";
import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Carousel from "./components/header/carousel/Carousel";
import AllClient from "./components/all-client/AllClient";
import Pricing from "./components/pricing/Pricing";
import NotFound from "./components/notFound/NotFound";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ClientDetails from "./components/client-details/ClientDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/clients" element={<AllClient />} />
        <Route path="/clients/:clientsId/details" element={<ClientDetails/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
