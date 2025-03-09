import About from "./components/About";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import LastSection from "./components/LastSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";

function App() {
  return (
    <section>
      <Hero />
      <About />
      <Projects />
      <SoftSkills />
      <Skills />
      <LastSection />
    </section>
  );
}

export default App;
