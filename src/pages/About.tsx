import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-card">
        <h1 className="about-title">À propos de moi</h1>
        <p className="about-text">
          Je suis un développeur fullstack et étudiant en 4ème année à l&apos;ENI Fianarantsoa,
          mention Informatique Générale. Passionné par le développement logiciel, j&apos;affectionne
          particulièrement Python et JavaScript, que j&apos;ai utilisés pour mener à bien plusieurs
          projets académiques et personnels. Curieux et adaptable, je suis toujours prêt à apprendre
          de nouvelles technologies et à relever des défis techniques pour créer des solutions utiles
          et innovantes.
        </p>

        <div className="about-grid">
          <div className="about-block">
            <h2>Technologies principales</h2>
            <ul>
              <li>JavaScript (React, Node.js)</li>
              <li>Python (Django, FastAPI)</li>
              <li>HTML, CSS, Tailwind / CSS Modules</li>
              <li>Base de données SQL / NoSQL</li>
            </ul>
          </div>

          <div className="about-block">
            <h2>Ce que je recherche</h2>
            <p>
              Je souhaite participer à des projets concrets, collaborer avec d&apos;autres
              développeurs et continuer à améliorer mes compétences en conception d&apos;architectures
              web et mobiles modernes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
