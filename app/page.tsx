import './styles.css';

export default function Page() {
  return (
      <div className="container">
        <header>
          <img src="/profile.png" alt="Profile" className="profile-image" />
          <div className="profile-info">
            <h1>Dubuisson Hugo</h1>
            <p>Jeune développeur en alternance chez <a href="https://www.portailpro.net/" target="_blank" rel="noopener noreferrer">Portailpro</a> en développement de site web en Symfony</p>
          </div>
        </header>
        <main>
          <section className="skills">
            <h2 className="skills-title">Développement Web</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>HTML</h3>
                <img src="/html.png" alt="HTML"/>
              </div>
              <div className="skill-card">
                <h3>CSS</h3>
                <img src="/css-3.png" alt="CSS"/>
              </div>
              <div className="skill-card">
                <h3>JavaScript</h3>
                <img src="/script-java.png" alt="JavaScript"/>
              </div>
              <div className="skill-card">
                <h3>TypeScript</h3>
                <img src="/typescript.svg" alt="TypeScript"/>
              </div>
              <div className="skill-card">
                <h3>Symfony</h3>
                <img src="/php.png" alt="Symfony"/>
              </div>
              <div className="skill-card">
                <h3>Laravel</h3>
                <img src="/laravel-svgrepo-com.svg" alt="Laravel"/>
              </div>
            </div>
          </section>
          <section className="ide">
            <h2 className="section-title">IDE</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>WebStorm</h3>
                <img src="/webstorm-svgrepo-com.svg" alt="WebStorm"/>
              </div>
              <div className="skill-card">
                <h3>PhpStorm</h3>
                <img src="/phpstorm.svg" alt="PhpStorm"/>
              </div>
              <div className="skill-card">
                <h3>PyCharm</h3>
                <img src="/pycharm-svgrepo-com.svg" alt="PyCharm"/>
              </div>
              <div className="skill-card">
                <h3>VSCode</h3>
                <img src="/visual-studio-145-svgrepo-com.svg" alt="VSCode"/>
              </div>
            </div>
          </section>
          <section className="database">
            <h2 className="section-title">Database</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>SQL</h3>
                <img src="/database-svgrepo-com.svg" alt="SQL"/>
              </div>
              <div className="skill-card">
                <h3>MongoDB</h3>
                <img src="/mongodb-svgrepo-com.svg" alt="MongoDB"/>
              </div>
              <div className="skill-card">
                <h3>HeidiSQL</h3>
                <img src="/heidi.png" alt="HeidiSQL"/>
              </div>
            </div>
          </section>
          <section className="projects">
            <h2 className="section-title">Projets</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>Portfolio</h3>
                <img src="/imgportfolio.png" alt="Nom du Projet 1"/>
                <p>Création d'un site portfolio avec du HTML/CSS/JS</p>
                <div className="project-buttons">
                  <a href="https://hugodubuisson.github.io/portfolio/html/accueil.html" target="_blank"
                     rel="noopener noreferrer" className="btn">Voir plus</a>
                </div>
              </div>
              <div className="skill-card">
                <h3>Flatcraft</h3>
                <img src="/flatcraft.png" alt="Nom du Projet 2"/>
                <p>Conception d'un projet FlatCraft (Comme un Minecraft mais en 2D)</p>
                <div className="project-buttons">
                  <a href="https://github.com/hugodubuisson/flatcraft" target="_blank" rel="noopener noreferrer"
                     className="btn">Voir plus</a>
                </div>
              </div>
            </div>
            <div className="more-projects-button">
              <a href="https://github.com/hugodubuisson" target="_blank" rel="noopener noreferrer" className="btn">Voir
                plus de projets</a>
            </div>
          </section>
        </main>
        <footer>
          <h2 className="information">Informations</h2>
          <ul>
            <li><a href="https://www.linkedin.com/in/hugo-dubuisson-30a825274/"><img src="/linkedin.svg" alt="LinkedIn"
                                                                                     className="footer-icon"/></a></li>
            <li><a href="mailto:hugo.dubuisson59@gmail.com"><img src="/email-svgrepo-com.svg" alt="Email"
                                                                 className="footer-icon"/></a></li>
            <li><a href="https://github.com/hugodubuisson"><img src="/github-svgrepo-com.svg" alt="GitHub"
                                                                className="footer-icon"/></a></li>
          </ul>
          <p className="texteFooter">© 2024 Dubuisson Hugo. Tous droits réservés.</p>
        </footer>
      </div>
  );
}