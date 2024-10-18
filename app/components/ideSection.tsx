import React from 'react';
import { SiWebstorm, SiPhpstorm, SiPycharm, SiVisualstudiocode } from 'react-icons/si';
import styles from '../styles/allcss.module.css';

const IDESection: React.FC = () => {
    return (
        <section className={styles.sections}>
            <h2 className={styles.sectionTitle}>IDE</h2>
            <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>WebStorm</h3>
                    <SiWebstorm size={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>PhpStorm</h3>
                    <SiPhpstorm size={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>PyCharm</h3>
                    <SiPycharm size={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>VSCode</h3>
                    <SiVisualstudiocode size={64} className={styles.skillCardImage} />
                </div>
            </div>
        </section>
    );
};

export default IDESection;