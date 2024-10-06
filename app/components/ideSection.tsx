import React from 'react';

export default function IDESection() {
    return (
        <section className="ide">
            <h2 className="section-title">IDE</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <h3>WebStorm</h3>
                    <img src="./images/webstorm-svgrepo-com.svg" alt="WebStorm"/>
                </div>
                <div className="skill-card">
                    <h3>PhpStorm</h3>
                    <img src="./images/phpstorm.svg" alt="PhpStorm"/>
                </div>
                <div className="skill-card">
                    <h3>PyCharm</h3>
                    <img src="./images/pycharm-svgrepo-com.svg" alt="PyCharm"/>
                </div>
                <div className="skill-card">
                    <h3>VSCode</h3>
                    <img src="./images/visual-studio-145-svgrepo-com.svg" alt="VSCode"/>
                </div>
            </div>
        </section>
    );
}