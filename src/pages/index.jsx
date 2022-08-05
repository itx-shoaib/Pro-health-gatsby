import React from "react";
import "../css/HomePage.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomepageCarousel from "../components/HomepageCarousel/HomepageCarousel";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { graphql } from "gatsby";

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  AOS.init({
    duration: 1500,
  });
}

const IndexPage = ({ data: { sanityHomepage } }) => {
  console.log(sanityHomepage, "sanityHomepage");
  return (
    <div>
      <Navbar />
      <div className="scrolloff">
        <HomepageCarousel mainPageSlides={sanityHomepage.main_display_images} />

        <div className="row">
          <div className="col-md-6 ownersection">
            <h1 data-aos="fade-left" className="HeadOne">
              Who We Are?
            </h1>
            <h5 data-aos="fade-left" className="HeadTwo">
              Pro-Health is Pakistan’s Leading Healthcare Facility Planner,
              established since 2001. They specialize in the field of Healthcare
              Engineering ( Design, Planning , Equipment Management), Healthcare
              Project Management and provide turnkey solutions to it’s client.
            </h5>
            <h5 data-aos="fade-left" className="HeadThree">
              Dr. Shehzad Nazir Leghari
            </h5>
            <h6 data-aos="fade-left" className="HeadFour">
              CEO & Founder
            </h6>
            <img
              data-aos="fade-left"
              alt="..."
              src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/signature-1.png"
            />
          </div>
          <div data-aos="fade-right" className="col-md-6 ownersection">
            <img
              alt="..."
              src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/who-we-1.jpg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ownersection align-items-center mediaqueryFour">
            <img
              data-aos="fade-right"
              alt="..."
              src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/specialization-1.jpg"
            />
          </div>
          <div className="col-md-6 mediaqueryspec" data-aos="fade-left">
            <h1 className="HeadOne text-center">Specialization</h1>
            <h5 className="SpecHeadOne text-center">
              Hospital Management and System
            </h5>
            <div className="row rowmargin">
              <div className="col-md-6">
                <h5 className="SpecList">
                  {" "}
                  Project Feasibility & Concept development
                </h5>
                <h5 className="SpecList">
                  {" "}
                  Healthcare Facility Design & Planning
                </h5>
                <h5 className="SpecList">
                  {" "}
                  Establish Biomedical Engineering Departments in Hospitals
                </h5>
                <h5 className="SpecList">
                  {" "}
                  Procurement of Electro-medical Equipment.
                </h5>
              </div>
              <div className="col-md-6">
                <h5 className="SpecList"> Maintenance Management</h5>
                <h5 className="SpecList"> Turnkey Supplies & Execution.</h5>
                <h5 className="SpecList"> Turnkey Supplies & Execution.</h5>
                <h5 className="SpecList">Healthcare Staff Training</h5>
                <h5 className="SpecList">Hospital Project Management</h5>
                <h5 className="SpecList"> Turnkey Project</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mediaquerythree">
          <div className="col-md-6">
            <h1 data-aos="fade-right" className="ProjectHeadTwo text-center">
              Latest Projects
            </h1>
          </div>
          <div className="col-md-6">
            <h6 data-aos="fade-left" className="ProjectHeadTwo">
              Rawalpindi Institute of Cardiology
            </h6>
          </div>
        </div>
        <div className="row justify-content-end mt-5 mediaquerytwo">
          <div className="col-md-9">
            <img
              alt="..."
              src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/04/l-project-1-2-1.jpg"
            />
          </div>
        </div>

        <div data-aos="zoom-in">
          <div className="paddingrow rowmargin">
            <h1 className="HeadOne">Latest News</h1>
          </div>
          <div className="row paddingrow">
            <div className="col-md-4 imgcontainer">
              <img
                className="image"
                alt="..."
                src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/04/discover2_detail-1-1-350x350.jpg"
              />
              <div className="overlay">
                <div className="textDate">March 29, 2021</div>
                <div className="textTitle">House, on Near</div>
                <div className="textDescription">
                  This response is important for our ability to learn from
                  mistakes, but it also gives rise to self-criticism, because it
                  is
                </div>
                <button type="button" className="btn learnmore">
                  Learn more
                  <i className="fa-solid fa-chevron-right learnmoreIcon"></i>
                </button>
              </div>
            </div>
            <div className="col-md-4 imgcontainer">
              <img
                className="image"
                alt="..."
                src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/birdhousestudios-03-350x350.jpg"
              />
              <div className="overlay">
                <div className="textDate">March 29, 2021</div>
                <div className="textTitle">Modern bedrooms with</div>
                <div className="textDescription">
                  This response is important for our ability to learn from
                  mistakes, but it also gives rise to self-criticism, because it
                  is
                </div>
                <button type="button" className="btn learnmore">
                  Learn more
                  <i className="fa-solid fa-chevron-right learnmoreIcon"></i>
                </button>
              </div>
            </div>
            <div className="col-md-4 imgcontainer">
              <img
                className="image"
                alt="..."
                src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/97ee8a96681617-3-350x350.jpg"
              />
              <div className="overlay">
                <div className="textDate">March 29, 2021</div>
                <div className="textTitle">People Accept Interior</div>
                <div className="textDescription">
                  This response is important for our ability to learn from
                  mistakes, but it also gives rise to self-criticism, because it
                  is
                </div>
                <button type="button" className="btn learnmore">
                  Learn more
                  <i className="fa-solid fa-chevron-right learnmoreIcon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div className="row justify-content-center paddingrow">
          <div className="col-md-9">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
// Step 3: Export your component
export default IndexPage;

export const query = graphql`
  query homepageQuery {
    sanityHomepage {
      heading
      main_display_images {
        image_heading
        image_text
        main_display_image {
          asset {
            gatsbyImageData
          }
        }
        project {
          slug {
            current
          }
        }
      }
    }
  }
`;
