import { About } from "./components/About";
// import { Cta } from "./components/Cta";
// import { FAQ } from "./components/FAQ";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ScrollToTop } from "./components/ScrollToTop";
// import { Services } from "./components/Services";
// import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <About />
      {/* <HowItWorks /> */}
      <Project />
      {/* <Services /> */}
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      <Team />
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      {/* <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
