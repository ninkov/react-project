import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Carousel from "./components/header/carousel/Carousel";

import { Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/booking" element={<Booking />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
