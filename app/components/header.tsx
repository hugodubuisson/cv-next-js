import React from 'react';
import Image from 'next/image';
import styles from '../styles/allcss.module.css';

const Header: React.FC = () => {
    return (
        <header className={`${styles.header}`}>
            <Image
                src="./images/profileWebp.webp"
                alt="Profile"
                className={styles.profileImage}
                width={150}
                height={150}
                loading="lazy"
            />
            <div className={styles.profileInfo}>
                <h1 className={styles.headerTitle}>Dubuisson Hugo</h1>
                <p className={styles.headerText}>
                    Jeune développeur en alternance chez{" "}
                    <a
                        href="https://www.portailpro.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.headerLink}
                    >
                        Portailpro
                    </a>{" "}
                    en développement de site web en Symfony
                </p>
            </div>
        </header>
    );
};

export default Header;