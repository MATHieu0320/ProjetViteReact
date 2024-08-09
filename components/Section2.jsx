import React from "react";
import Les4images from "./TextComponant/Les4images";

// desktop
import BouchonRouge from "../Images/desktop/image-gallery-milkbottles.jpg";
import orange from "../Images/desktop/image-gallery-orange.jpg";
import Cornet from "../Images/desktop/image-gallery-cone.jpg";
import sucre from "../Images/desktop/image-gallery-sugarcubes.jpg";
// mobile
import BouchonRougeMobile from "../Images/mobile/image-gallery-milkbottles.jpg";
import orangeMobile from "../Images/mobile/image-gallery-orange.jpg";
import CornetMobile from "../Images/mobile/image-gallery-cone.jpg";
import sucreMobile from "../Images/mobile/image-gallery-sugar-cubes.jpg";
const Section2 = () => {
  return (
    <section className="section2" id="Projects">
      <Les4images img={BouchonRouge} imgmobile={BouchonRougeMobile} />
      <Les4images img={orange} imgmobile={orangeMobile} />
      <Les4images img={Cornet} imgmobile={CornetMobile} />
      <Les4images img={sucre} imgmobile={sucre} />
    </section>
  );
};

export default Section2;
