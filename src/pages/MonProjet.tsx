

const MonProjet = () => {
  return (
    <div>
     
      <div>
        <h1>Mes Projets</h1>
          <div className="projet1">
            <h2> Application de gestion de commande</h2>
            <img src={"facture_liste.png"} />
            <p> Projet de stage, conception et realisation d'une application web pour la gestion de commande</p>
            <ul> 
              <li>React.js</li>
              <li>Express.js</li>
              <li>MariaDB</li>
            </ul> 
          </div>

          <div className="projet2">
            <h2> Application de gestion d' adherant</h2>
            <img src={"note_demo.jpg"} />
            <p> La suivie des membres, suivie de cotisation et generation de carte pour les nouveaux membres</p>
            <ul> 
              <li>React Native</li>
              <li>Express.js</li>
              <li>MariaDB</li>
            </ul> 
          </div>

      </div>
      
    </div>
  );
};

export default MonProjet;