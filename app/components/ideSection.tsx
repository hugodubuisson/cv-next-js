import React from 'react';
import Image from 'next/image';

export default function IDESection() {
    return (
        <section className="ide">
            <h2 className="section-title">IDE</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <h3>WebStorm</h3>
                    <Image src="./images/webstorm-svgrepo-com.svg" alt="WebStorm" width={64} height={64} />
                </div>
                <div className="skill-card">
                    <h3>PhpStorm</h3>
                    <Image src="./images/phpstorm.svg" alt="PhpStorm" width={64} height={64} />
                </div>
                <div className="skill-card">
                    <h3>PyCharm</h3>
                    <Image src="./images/pycharm-svgrepo-com.svg" alt="PyCharm" width={64} height={64} />
                </div>
                <div className="skill-card">
                    <h3>VSCode</h3>
                    <Image src="./images/visual-studio-145-svgrepo-com.svg" alt="VSCode" width={64} height={64} />
                </div>
            </div>
        </section>
    );
}