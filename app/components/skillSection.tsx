import React from 'react';
import Image from 'next/image';

export default function SkillsSection() {
    return (
        <section className="skills">
            <h2 className="skills-title">Développement Web</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <h3>HTML</h3>
                    <Image src="./images/html.png" alt="HTML" width={64} height={64} />
                </div>
                <div className="skill-card">
                    <h3>CSS</h3>
                    <Image src="./images/css-3.png" alt="CSS" width={64} height={64} />
                </div>
                <div className="skill-card">
                    <h3>JavaScript</h3>
                    <Image src="./images/script-java.png" alt="JavaScript" width={64} height={64} />
                </div>
                <div className="skill-card">
                    <h3>TypeScript</h3>
                    <Image src="./images/typescript.svg" alt="TypeScript" width={64} height={64} />
                </div>
                <div className="skill-card">
                    <h3>Symfony</h3>
                    <Image src="./images/php.png" alt="Symfony" width={64} height={64} />
                </div>
                <div className="skill-card">
                    <h3>Laravel</h3>
                    <Image src="./images/laravel-svgrepo-com.svg" alt="Laravel" width={64} height={64} />
                </div>
            </div>
        </section>
    );
}