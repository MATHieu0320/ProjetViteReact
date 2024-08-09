import React from "react";
import Text from "./TextComponant/Text";
import { DoublePhoto } from "./TextComponant/DoublePhoto";
// desktop
import Oeuf from "../Images/desktop/image-transform.jpg";
import Verre from "../Images/desktop/image-stand-out.jpg";
import Cerise from "../Images/desktop/image-graphic-design.jpg";
import FruitsOrange from "../Images/desktop/image-photography.jpg";
// mobile

import OeufMobile from "../Images/mobile/image-transform.jpg";
import VerreMobile from "../Images/mobile/image-stand-out.jpg";
import CeriseMobile from "../Images/mobile/image-graphic-design.jpg";
import FruitsOrangeMobile from "../Images/mobile/image-photography.jpg";
export const Main = () => {
  return (
    <main id="About">
      <Text
        Titre={`Transform your brand`}
        Paragraphe={
          "We are a full-service creative agency speicalizing in helping brands grow fast. Engage your client through compelling cisuals that do most of marketing for you. "
        }
        img={Oeuf}
        className={"grid-1"}
        id={"span1"}
        imgmobile={OeufMobile}
      />
      <Text
        Titre={"Stand out to the right audience"}
        Paragraphe={
          "Using a collaborative formula of designers , resarchers , photographers , videographers , and copywhriters, we'II build and extend your brand in digital places."
        }
        imgmobile={VerreMobile}
        img={Verre}
        className={"grid-2"}
        id={"span2"}
      />
      <div className="grid-3" id="Services">
        <DoublePhoto
          Class={"MainTexte1"}
          Titreh3={"Graphic Design"}
          Paragraphe={
            " Great design makes you memorable. We deliver  artwork that underscores your brand message  and captures potential clients attention."
          }
        />
        <DoublePhoto
          Class={"MainTexte2"}
          Titreh3={"Photography"}
          Paragraphe={
            "Increase your credibility by getting the most stunning hight-quality photos that improve your buisness Image."
          }
        />
      </div>
    </main>
  );
};

export default Main;
