import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Specials />
      <Booking />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
