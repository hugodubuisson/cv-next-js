import React from 'react';
import { FaDatabase } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import styles from '../styles/allcss.module.css';

const DatabaseSection: React.FC = () => {
    return (
        <section className={`${styles.sections}`}>
            <h2 className={styles.sectionTitle}>Database</h2>
            <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>SQL</h3>
                    <FaDatabase size={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>MongoDB</h3>
                    <SiMongodb size={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>HeidiSQL</h3>
                    <FaDatabase size={64} className={styles.skillCardImage} />
                </div>
            </div>
        </section>
    );
};

export default DatabaseSection;