import React from 'react';

export default function Header() {
    return (
        <header>
            <img src="/profile.png" alt="Profile" className="profile-image" />
            <div className="profile-info">
                <h1>Dubuisson Hugo</h1>
                <p>Jeune développeur en alternance chez <a href="https://www.portailpro.net/" target="_blank" rel="noopener noreferrer">Portailpro</a> en développement de site web en Symfony</p>
            </div>
        </header>
    );
}