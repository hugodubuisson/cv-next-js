import React from 'react';

export default function Footer() {
    return (
        <footer>
            <h2 className="information">Informations</h2>
            <ul>
                <li><a href="https://www.linkedin.com/in/hugo-dubuisson-30a825274/"><img src="/linkedin.svg" alt="LinkedIn" className="footer-icon"/></a></li>
                <li><a href="mailto:hugo.dubuisson59@gmail.com"><img src="/email-svgrepo-com.svg" alt="Email" className="footer-icon"/></a></li>
                <li><a href="https://github.com/hugodubuisson"><img src="/github-svgrepo-com.svg" alt="GitHub" className="footer-icon"/></a></li>
            </ul>
            <p className="texteFooter">© 2024 Dubuisson Hugo. Tous droits réservés.</p>
        </footer>
    );
}