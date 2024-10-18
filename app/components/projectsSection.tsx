import React from 'react';
import Image from 'next/image';
import styles from '../styles/allcss.module.css';

const ProjectsSection: React.FC = () => {
    return (
        <section className={`${styles.projects}`}>
            <h2 className={styles.sectionTitle}>Projets</h2>
            <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                    <h3>Portfolio</h3>
                    <Image src="./images/imgportfolioWebp.webp" alt="Nom du Projet 1" width={150} height={150} loading="lazy" className={styles.skillCardImage} />
                    <p className={styles.skillCardText}>Création d'un site portfolio avec du HTML/CSS/JS</p>
                    <div className={styles.projectButtons}>
                        <a href="https://hugodubuisson.github.io/portfolio/html/accueil.html" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>Voir plus</a>
                    </div>
                </div>
                <div className={styles.skillCard}>
                    <h3>Flatcraft</h3>
                    <Image src="./images/flatcraft3.webp" alt="Nom du Projet 2" width={150} height={150} loading="lazy" className={styles.skillCardImage} />
                    <p className={styles.skillCardText}>Conception d'un projet FlatCraft (Comme un Minecraft mais en 2D)</p>
                    <div className={styles.projectButtons}>
                        <a href="https://github.com/hugodubuisson/flatcraft" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>Voir plus</a>
                    </div>
                </div>
            </div>
            <div className={styles.moreProjectsButton}>
                <a href="https://github.com/hugodubuisson" target="_blank" rel="noopener noreferrer" className={styles.moreProjectsButtonLink}>Voir plus de projets</a>
            </div>
        </section>
    );
};

export default ProjectsSection;