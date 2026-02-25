import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import About from "./About";     
import MonProjet from "./MonProjet";  
import Contact from "./Contact";
import './Home.css'; // Ajoutez cette ligne

const Home = () => {
  return (
    <div className="home-container"> {/* Ajoutez cette classe */}
      <Navbar/>
      
      <section id="accueil">
        <h1>Bonjour,</h1>
        <p> je suis Mariot Fanantenana
Développeur Fullstack passionné par la création d'applications web et mobiles innovantes avec JavaScript et Python. Actuellement étudiant en 4ème année d'informatique à l'ENI Fianarantsoa.</p>
        <div className="button-group">
          <button>Voir mon projet</button>
          <button>Me contacter</button>
        </div>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="projet">
        <MonProjet/>
      </section>

      <section id="contact">
        <Contact/>
      </section>

      <Footer />
    </div>
  );
};

export default Home;