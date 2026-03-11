import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./About";
import MonProjet from "./MonProjet";
import Contact from "./Contact";
import "./Home.css";

const Home = () => {
  const scrollToSection = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      <Navbar />

      <section id="accueil" className="hero">
        <div className="hero-content">
          <p className="hero-tag">Développeur Fullstack JavaScript & Python</p>
          <h1 className="hero-title">
            Bonjour, je suis <span className="hero-name">Mariot Fanantenana</span>
          </h1>
          <p className="hero-text">
            Développeur Fullstack passionné par la création d&apos;applications web et mobiles
            innovantes avec JavaScript et Python. Actuellement étudiant en 4ème année
            d&apos;informatique à l&apos;ENI Fianarantsoa.
          </p>
          <div className="button-group">
            <button
              className="btn primary-btn"
              onClick={() => scrollToSection("projet")}
            >
              Voir mes projets
            </button>
            <button
              className="btn secondary-btn"
              onClick={() => scrollToSection("contact")}
            >
              Me contacter
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="projet" className="section">
        <MonProjet />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
