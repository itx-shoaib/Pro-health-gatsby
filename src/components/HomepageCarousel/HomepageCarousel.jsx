import useEmblaCarousel from "embla-carousel-react";
import * as styles from "./HomePageCarousel.module.css";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { GatsbyImage } from "gatsby-plugin-image";
import GatsbyLink from "gatsby-link";

const HomepageCarousel = ({ mainPageSlides }) => {
  console.log(mainPageSlides, "mainPageSlides");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {mainPageSlides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              {/* <div className={styles.embla__slide__inner}> */}
              <GatsbyImage
                fullWidth
                image={slide.main_display_image.asset.gatsbyImageData}
              />
              <h4
                style={{
                  color: "white",
                  top: "70%",
                  position: "absolute",
                  left: "10%",
                  width: "25%",
                }}
              >
                {slide.image_text}
              </h4>
              {slide.project?.slug.current ? (
                <GatsbyLink
                  style={{
                    color: "white",
                    top: "80%",
                    position: "absolute",
                    left: "15%",
                    width: "5%",
                  }}
                  to={`/project/${slide.project.slug.current}`}
                >
                  See Details
                </GatsbyLink>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageCarousel;
