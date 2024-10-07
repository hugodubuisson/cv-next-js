import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image
        src="./images/profile3.jpg"
        alt="Profile"
        className="profile-image"
        width={150}
        height={150}
      />
      <div className="profile-info">
        <h1>Dubuisson Hugo</h1>
        <p>
          Jeune développeur en alternance chez{" "}
          <a
            href="https://www.portailpro.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portailpro
          </a>{" "}
          en développement de site web en Symfony
        </p>
      </div>
    </header>
  );
}
