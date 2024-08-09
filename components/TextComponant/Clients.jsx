import React from "react";

export const Clients = ({ img, Texte, Prenom, role }) => {
  return (
    <div className="flex-2">
      <img src={img} alt={img} />
      <p> {Texte} </p>
      <h5> {Prenom} </h5>
      <span> {role} </span>
    </div>
  );
};

export default Clients;
