import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import styles from '../styles/allcss.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={`${styles.footer}`}>
            <h2 className={styles.information}>Informations</h2>
            <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                    <a href="https://www.linkedin.com/in/hugo-dubuisson-30a825274/" className={styles.footerLink}>
                        <FaLinkedin className={styles.footerIcon} size={24} color="white" />
                    </a>
                </li>
                <li className={styles.footerListItem}>
                    <a href="mailto:hugo.dubuisson59@gmail.com" className={styles.footerLink}>
                        <FaEnvelope className={styles.footerIcon} size={24} color="white" />
                    </a>
                </li>
                <li className={styles.footerListItem}>
                    <a href="https://github.com/hugodubuisson" className={styles.footerLink}>
                        <FaGithub className={styles.footerIcon} size={24} color="white" />
                    </a>
                </li>
            </ul>
            <p className={styles.texteFooter}>© 2024 Dubuisson Hugo. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;