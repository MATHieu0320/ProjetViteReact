import React from "react";
import Clients from "./TextComponant/Clients";
// img clients
import ImgEmily from "../Images/imagesnonresponsive/image-emily.jpg";
import ImgJennie from "../Images/imagesnonresponsive/image-jennie.jpg";
import ImgThomas from "../Images/imagesnonresponsive/image-thomas.jpg";
export const Section1 = () => {
  return (
    <section className="section1">
      <h4>client testimonials</h4>
      <div className="Flex">
        <Clients
          img={ImgEmily}
          Texte={
            "We put our trust in Sunnyside and they delivered,making sure our needs were met and deadlines were always hit."
          }
          Prenom={"Emily R."}
          role={"Marketing Director"}
        />
        <Clients
          img={ImgThomas}
          Texte={
            "Sunnyside's enthusian coupled with their keen interest in our brand's succes made it a satisfying and enjoyable experience"
          }
          Prenom={"Thomas S."}
          role={"Chief Operating  Officer"}
        />
        <Clients
          img={ImgJennie}
          Texte={
            "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended !"
          }
          Prenom={"Jennie F."}
          role={"Buisiness Owner"}
        />
      </div>
    </section>
  );
};

export default Section1;
