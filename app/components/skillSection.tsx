import React from 'react';
import Image from 'next/image';
import styles from '../styles/skills.module.css';

const SkillsSection: React.FC = () => {
    return (
        <section className={styles.skills}>
            <h2 className={styles.skillsTitle}>Développement Web</h2>
            <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>HTML</h3>
                    <Image src="./images/html.svg" alt="HTML" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>CSS</h3>
                    <Image src="./images/css-3.svg" alt="CSS" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>JavaScript</h3>
                    <Image src="./images/script-java.svg" alt="JavaScript" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>TypeScript</h3>
                    <Image src="./images/typescript.svg" alt="TypeScript" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>Symfony</h3>
                    <Image src="./images/php.svg" alt="Symfony" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>Laravel</h3>
                    <Image src="./images/laravel-svgrepo-com.svg" alt="Laravel" width={64} height={64} className={styles.skillCardImage} />
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;