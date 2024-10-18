import React from 'react';
import { FaJsSquare, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import styles from '../styles/allcss.module.css';

const SkillsSection: React.FC = () => {
    return (
        <section className={styles.sections}>
            <h2 className={styles.sectionTitle}>Développement Web</h2>
            <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>JavaScript</h3>
                    <FaJsSquare size={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>TypeScript</h3>
                    <SiTypescript size={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>Symfony</h3>
                    <FaPhp size={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>Laravel</h3>
                    <FaLaravel size={64} className={styles.skillCardImage} />
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;