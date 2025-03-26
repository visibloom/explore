import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import PageFooter from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <About />
    <Services />
    {/* <Projects /> */}
    <PageFooter />
    </>
  );
}

export default App;
