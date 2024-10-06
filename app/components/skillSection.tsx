import React from 'react';

export default function SkillsSection() {
    return (
        <section className="skills">
            <h2 className="skills-title">Développement Web</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <h3>HTML</h3>
                    <img src="./images/html.png" alt="HTML"/>
                </div>
                <div className="skill-card">
                    <h3>CSS</h3>
                    <img src="./images/css-3.png" alt="CSS"/>
                </div>
                <div className="skill-card">
                    <h3>JavaScript</h3>
                    <img src="./images/script-java.png" alt="JavaScript"/>
                </div>
                <div className="skill-card">
                    <h3>TypeScript</h3>
                    <img src="./images/typescript.svg" alt="TypeScript"/>
                </div>
                <div className="skill-card">
                    <h3>Symfony</h3>
                    <img src="./images/php.png" alt="Symfony"/>
                </div>
                <div className="skill-card">
                    <h3>Laravel</h3>
                    <img src="./images/laravel-svgrepo-com.svg" alt="Laravel"/>
                </div>
            </div>
        </section>
    );
}