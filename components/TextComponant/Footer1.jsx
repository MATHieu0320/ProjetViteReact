import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
const Footer1 = ({}) => {
  const ListesTexte = ["About", "Services", "Projects"];

  return (
    <footer id="Contact">
      <div>
        <h6>sunnyside</h6>

        <ul className="ul-1">
          {ListesTexte.map((Texte) => (
            <li key={Texte}>
              <a href={`#` + Texte}> {Texte} </a>
            </li>
          ))}
        </ul>
        <ul className="ul-2">
          <li key={"faSquareFacebook"}>
            <a href="#">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
          </li>
          <li key={"faInstagram"}>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li key={"faTwitter"}>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li key={"faPinterest"}>
            <a href="#">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer1;
