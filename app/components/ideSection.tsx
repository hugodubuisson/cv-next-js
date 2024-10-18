import React from 'react';
import Image from 'next/image';
import styles from '../styles/section.module.css';

const IDESection: React.FC = () => {
    return (
        <section className={styles.sections}>
            <h2 className={styles.sectionTitle}>IDE</h2>
            <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>WebStorm</h3>
                    <Image src="./images/webstorm-svgrepo-com.svg" alt="WebStorm" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>PhpStorm</h3>
                    <Image src="./images/phpstorm.svg" alt="PhpStorm" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>PyCharm</h3>
                    <Image src="./images/pycharm-svgrepo-com.svg" alt="PyCharm" width={64} height={64} className={styles.skillCardImage} />
                </div>
                <div className={styles.skillCard}>
                    <h3 className={styles.skillCardTitle}>VSCode</h3>
                    <Image src="./images/visual-studio-145-svgrepo-com.svg" alt="VSCode" width={64} height={64} className={styles.skillCardImage} />
                </div>
            </div>
        </section>
    );
};

export default IDESection;