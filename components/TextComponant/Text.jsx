import React from "react";

export const Text = ({ Titre, Paragraphe, img, className, id, imgmobile }) => {
  return (
    <div className={className}>
      <div className="flex-Texte">
        <div className="Margin">
          <h2> {Titre} </h2>
          <p> {Paragraphe} </p>
          <span id={id}>
            <a href="span">learn more</a>
          </span>
        </div>
      </div>
      <div className="flex-img">
        <picture>
          <source media="(min-width: 1200px)" srcSet={img} />
          <source
            media="(max-width: 800px)"
            srcSet={imgmobile}
            height={"500px"}
          />
          <img src={img} alt="Flowers" />
        </picture>
      </div>
    </div>
  );
};

export default Text;
