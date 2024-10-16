import React from 'react';
import Image from 'next/image';
import styles from '../styles/footer.module.css';
import { Secular_One } from 'next/font/google';

const secular_one = Secular_One({ subsets: ['latin'], display: 'swap', weight: '400' });

const Footer: React.FC = () => {
    return (
        <footer className={`${styles.footer} ${secular_one.className}`}>
            <h2 className={styles.information}>Informations</h2>
            <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                    <a href="https://www.linkedin.com/in/hugo-dubuisson-30a825274/" className={styles.footerLink}>
                        <Image src="./images/linkedin.svg" alt="LinkedIn" className={styles.footerIcon} width={24} height={24} />
                    </a>
                </li>
                <li className={styles.footerListItem}>
                    <a href="mailto:hugo.dubuisson59@gmail.com" className={styles.footerLink}>
                        <Image src="./images/email-svgrepo-com.svg" alt="Email" className={styles.footerIcon} width={24} height={24} />
                    </a>
                </li>
                <li className={styles.footerListItem}>
                    <a href="https://github.com/hugodubuisson" className={styles.footerLink}>
                        <Image src="./images/github-svgrepo-com.svg" alt="GitHub" className={styles.footerIcon} width={24} height={24} />
                    </a>
                </li>
            </ul>
            <p className={styles.texteFooter}>© 2024 Dubuisson Hugo. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;