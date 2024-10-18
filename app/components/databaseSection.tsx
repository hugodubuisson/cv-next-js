import React from 'react';
import Image from 'next/image';
import styles from '../styles/section.module.css';
import { Secular_One } from 'next/font/google';

const secular_one = Secular_One({ subsets: ['latin'], display: 'swap', weight: '400' });

const DatabaseSection: React.FC = () => {
    return (
        <section className={`${styles.sections} ${secular_one.className}`}>
            <h2 className={styles.sectionTitle}>Database</h2>
            <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>SQL</h3>
                    <Image src="./images/database-svgrepo-com.svg" alt="SQL" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>MongoDB</h3>
                    <Image src="./images/mongodb-svgrepo-com.svg" alt="MongoDB" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>HeidiSQL</h3>
                    <Image src="./images/heidi.svg" alt="HeidiSQL" width={64} height={64} className={styles.skillCardImage} />
                </div>
            </div>
        </section>
    );
};

export default DatabaseSection;