import React from 'react';
import Image from 'next/image';

export default function DatabaseSection() {
    return (
        <section className="database">
            <h2 className="section-title">Database</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <h3>SQL</h3>
                    <Image src="./images/database-svgrepo-com.svg" alt="SQL" width={64} height={64} />
                </div>
                <div className="skill-card">
                    <h3>MongoDB</h3>
                    <Image src="./images/mongodb-svgrepo-com.svg" alt="MongoDB" width={64} height={64} />
                </div>
                <div className="skill-card">
                    <h3>HeidiSQL</h3>
                    <Image src="./images/heidi.png" alt="HeidiSQL" width={64} height={64} />
                </div>
            </div>
        </section>
    );
}