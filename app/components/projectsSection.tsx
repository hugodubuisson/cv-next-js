import React from 'react';
import Image from 'next/image';

export default function ProjectsSection() {
    return (
        <section className="projects">
            <h2 className="section-title">Projets</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <h3>Portfolio</h3>
                    <Image src="./images/imgportfolio.svg" alt="Nom du Projet 1" width={150} height={150} />
                    <p>Création d'un site portfolio avec du HTML/CSS/JS</p>
                    <div className="project-buttons">
                        <a href="https://hugodubuisson.github.io/portfolio/html/accueil.html" target="_blank" rel="noopener noreferrer" className="btn">Voir plus</a>
                    </div>
                </div>
                <div className="skill-card">
                    <h3>Flatcraft</h3>
                    <Image src="./images/flatcraft-min.png" alt="Nom du Projet 2" width={150} height={150} />
                    <p>Conception d'un projet FlatCraft (Comme un Minecraft mais en 2D)</p>
                    <div className="project-buttons">
                        <a href="https://github.com/hugodubuisson/flatcraft" target="_blank" rel="noopener noreferrer" className="btn">Voir plus</a>
                    </div>
                </div>
            </div>
            <div className="more-projects-button">
                <a href="https://github.com/hugodubuisson" target="_blank" rel="noopener noreferrer" className="btn">Voir plus de projets</a>
            </div>
        </section>
    );
}