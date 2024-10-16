import React from 'react';
import Image from 'next/image';
import styles from '../styles/database.module.css';

const DatabaseSection: React.FC = () => {
    return (
        <section className={styles.database}>
            <h2 className={styles.sectionTitle}>Database</h2>
            <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>SQL</h3>
                    <Image src="/images/database-svgrepo-com.svg" alt="SQL" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>MongoDB</h3>
                    <Image src="/images/mongodb-svgrepo-com.svg" alt="MongoDB" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>HeidiSQL</h3>
                    <Image src="/images/heidi.svg" alt="HeidiSQL" width={64} height={64} className={styles.skillCardImage} />
                </div>
            </div>
        </section>
    );
};

export default DatabaseSection;