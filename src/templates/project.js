import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import "../css/Project.css";
import EmblaCarousel from "../components/EmblaCarousel";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function ProjectPageTemplate({
  data: {
    sanityPortfolioProject: {
      client,
      project_images,
      location,
      scope_of_work,
      schedule,
      project_page_details,
      project_name,
    },
  },
}) {
  // //////////////////////////////////
  const slides = project_images;
  return (
    <>
      <Navbar />
      <div className="scrolloff">
        <EmblaCarousel slides={slides} />
        <h1 className="text-center color text-white p-5">{project_name}</h1>

        <div className="row pt-10">
          <div className="col-md-3">
            <h5 className="ServiceTitle">Client</h5>
            <h5 className="ServiceValue">{client}</h5>
          </div>
          <div className="col-md-3">
            <h5 className="ServiceTitle">Scope of Work</h5>
            <h5 className="ServiceValue">{scope_of_work}</h5>
          </div>
          <div className="col-md-3">
            <h5 className="ServiceTitle">Location</h5>
            <h5 className="ServiceValue">{location}</h5>
          </div>
          <div className="col-md-3">
            <h5 className="ServiceTitle">Schedule</h5>
            <h5 className="ServiceValue">{schedule}</h5>
          </div>
        </div>

        {project_page_details.map((projectPagePanel, index) => {
          return (
            <div
              className="row"
              key={projectPagePanel.detail_text_heading + index}
            >
              <div className="col-md-6 ownersection align-items-center mediaqueryFour">
                <GatsbyImage
                  image={projectPagePanel.detail_image.asset.gatsbyImageData}
                />
              </div>
              <div className="col-md-6 responsivepadding">
                <h1 className="HeadOne text-center">
                  {projectPagePanel.detail_text_heading}
                </h1>

                <div className="SpecList">
                  <p>{projectPagePanel.detail_text_text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <hr className="hr" />

        <Footer />
      </div>
    </>
  );
  /////////////////////////////////
}

export const query = graphql`
  query projectPageQuery($slug: String!) {
    sanityPortfolioProject(slug: { current: { eq: $slug } }) {
      client
      location
      scope_of_work
      schedule
      project_images {
        asset {
          gatsbyImageData
        }
      }
      project_page_details {
        detail_image {
          asset {
            gatsbyImageData
          }
        }
        detail_text_heading
        detail_text_text
      }
      project_name
    }
  }
`;
