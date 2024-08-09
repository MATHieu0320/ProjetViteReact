import { useState } from "react";

import IconeHamburger from "../Images/imagesnonresponsive/icon-hamburger.svg";
import "../styles/composantscss/StyleHamburger.css";

console.log();
export function Header({ imgLogo, imgFlechesBas }) {
  const ValeurLi = ["About", "Services", "Projects", "Contact"];

  function HandTheClick() {
    const ul = document.getElementById("UlClick");
    const li = document.querySelectorAll("#UlClick li a");
    const h1 = document.querySelector("h1");
    const logo = document.getElementById("imgFlechesBas");

    li.forEach((liColor) => {
      liColor.classList.toggle("LiClick");
    });
    ul.classList.toggle("HamburgerClick");

    logo.classList.toggle("None");
    h1.classList.toggle("None");
  }
  return (
    <header>
      <nav>
        <img src={imgLogo} alt="Logo" id="logo"></img>

        <ul id="UlClick">
          {" "}
          {ValeurLi.map((li) => (
            <li key={li}>
              <a href={`#` + li}>{li}</a>
            </li>
          ))}
        </ul>

        <img src={IconeHamburger} onClick={HandTheClick} id="hamburger"></img>
      </nav>
      <h1>we are creatives</h1>
      <div className="ClassImgFLechesBas">
        <img src={imgFlechesBas} alt="imgFlechesBas" id="imgFlechesBas" />
      </div>
    </header>
  );
}
