import React from "react";

export const Les4images = ({ img, imgmobile }) => {
  return (
    <div>
      <picture>
        <source media="(min-width: 1200px)" srcSet={img} />
        <source media="(max-width: 700px)" srcSet={imgmobile} />
        <img src={img} alt={img} />
      </picture>
    </div>
  );
};

export default Les4images;
