import './style.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import TechStack from "./components/TechStack"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="app">
      <div className="background"></div>
      <div className="navbar-container">
        <Navbar className="navbar"/>
      </div>
        
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="tech-stack"><TechStack /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
