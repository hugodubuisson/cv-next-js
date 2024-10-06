import React from 'react';

export default function DatabaseSection() {
    return (
        <section className="database">
            <h2 className="section-title">Database</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <h3>SQL</h3>
                    <img src="/database-svgrepo-com.svg" alt="SQL"/>
                </div>
                <div className="skill-card">
                    <h3>MongoDB</h3>
                    <img src="/mongodb-svgrepo-com.svg" alt="MongoDB"/>
                </div>
                <div className="skill-card">
                    <h3>HeidiSQL</h3>
                    <img src="/heidi.png" alt="HeidiSQL"/>
                </div>
            </div>
        </section>
    );
}