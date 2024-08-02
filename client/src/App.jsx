import AboutUs from "./components/about-us/AboutUs";
import Features from "./components/about-us/features/Features";
import OurTeam from "./components/about-us/our-team/OurTeam";
import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import OurServices from "./components/our-services/OurServices";
import Pricing from "./components/pricing/Pricing";

function App() {
  return (
    <>
      <Header />
      <AboutUs/>
      <Features/>
      <OurTeam/>
      <OurServices/>
      <Pricing />
      <Booking />
      <Footer />
    </>
  );
}

export default App;
