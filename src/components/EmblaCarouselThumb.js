import React from "react";
import "../css/Embla.css";
import { GatsbyImage } from "gatsby-plugin-image";

export const Thumb = ({ selected, onClick, gatsbyImageData }) => (
  <div
    className={`embla__slide embla__slide--thumb ${
      selected ? "is-selected" : ""
    }`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <GatsbyImage
        className="embla__slide__thumbnail"
        image={gatsbyImageData}
        alt="A cool cat."
      />
    </button>
  </div>
);
