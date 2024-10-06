import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <h2 className="information">Informations</h2>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/hugo-dubuisson-30a825274/">
                        <Image src="./images/linkedin.svg" alt="LinkedIn" className="footer-icon" width={24} height={24} />
                    </a>
                </li>
                <li>
                    <a href="mailto:hugo.dubuisson59@gmail.com">
                        <Image src="./images/email-svgrepo-com.svg" alt="Email" className="footer-icon" width={24} height={24} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/hugodubuisson">
                        <Image src="./images/github-svgrepo-com.svg" alt="GitHub" className="footer-icon" width={24} height={24} />
                    </a>
                </li>
            </ul>
            <p className="texteFooter">© 2024 Dubuisson Hugo. Tous droits réservés.</p>
        </footer>
    );
}
