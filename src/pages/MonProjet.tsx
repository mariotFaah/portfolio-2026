import "./MonProjet.css";

const MonProjet = () => {
  return (
    <section id="projet" className="projects-section">
      <div className="projects-header">
        <h1 className="projects-title">Mes Projets</h1>
        <p className="projects-subtitle">
          Quelques projets que j&apos;ai réalisés pendant mes études et mes stages,
          en utilisant JavaScript, Python et des technologies web modernes.
        </p>
      </div>

      <div className="projects-grid">
        {/* Projet 1 */}
        <article className="project-card">
          <div className="project-image-wrapper">
            <img
              src={"facture_liste.png"}
              alt="Interface de l'application de gestion de commande"
              className="project-image"
            />
          </div>

          <div className="project-content">
            <h2 className="project-title">Application de gestion de commande</h2>
            <p className="project-type">Projet de stage</p>
            <p className="project-description">
              Conception et réalisation d&apos;une application web pour la gestion des commandes,
              permettant de créer, suivre et facturer les commandes des clients
              de manière simple et centralisée.
            </p>

            <ul className="tech-list">
              <li>React.js</li>
              <li>Express.js</li>
              <li>MariaDB</li>
            </ul>

            <div className="project-footer">
              <span className="project-status">Statut : Terminé</span>
              {/* Si tu as un lien GitHub plus tard, tu peux le rajouter ici */}
              {/* <a href="https://github.com/..." className="project-link" target="_blank" rel="noreferrer">
                Voir le code
              </a> */}
            </div>
          </div>
        </article>

        {/* Tu peux dupliquer ce bloc pour ajouter d'autres projets */}
        {/* <article className="project-card">...</article> */}
      </div>
    </section>
  );
};

export default MonProjet;
