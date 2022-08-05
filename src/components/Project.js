import React from "react";
import "../css/Project.css";
import EmblaCarousel from "./EmblaCarousel";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Project = () => {
  const SLIDE_COUNT = 3;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Navbar />
      <div className="scrolloff">
        <EmblaCarousel slides={slides} />

        <div className="labeldivstyle">
          <h1 className="labelstyle">Our mission is develop the best design</h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <h5 className="ServiceTitle">Client</h5>
            <h5 className="ServiceValue">Apple Inc.</h5>
          </div>
          <div className="col-md-3">
            <h5 className="ServiceTitle">Services</h5>
            <h5 className="ServiceValue">Branding, Design</h5>
          </div>
          <div className="col-md-3">
            <h5 className="ServiceTitle">Date</h5>
            <h5 className="ServiceValue">Jul 25, 2022</h5>
          </div>
          <div className="col-md-3">
            <h5 className="ServiceTitle">Team</h5>
            <h5 className="ServiceValue">Paul - Designer</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ownersection align-items-center mediaqueryFour">
            <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/specialization-1.jpg" />
          </div>
          <div className="col-md-6 responsivepadding">
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
        <div className="row">
          <div className="col-md-6 ownersection responsivepadding">
            <h1 className="HeadOne">Who We Are?</h1>
            <h5 className="HeadTwo">
              Pro-Health is Pakistan’s Leading Healthcare Facility Planner,
              established since 2001. They specialize in the field of Healthcare
              Engineering ( Design, Planning , Equipment Management), Healthcare
              Project Management and provide turnkey solutions to it’s client.
            </h5>
            <h5 className="HeadThree">Dr. Shehzad Nazir Leghari</h5>
            <h6 className="HeadFour">CEO & Founder</h6>
            <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/signature-1.png" />
          </div>
          <div className="col-md-6 ownersection">
            <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/who-we-1.jpg" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ownersection align-items-center mediaqueryFour">
            <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/specialization-1.jpg" />
          </div>
          <div className="col-md-6 responsivepadding">
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
        <hr className="hr" />
        {/* <div className="row justify-content-center paddingrow"> */}
        <Footer />
      </div>
    </>
  );
};

export default Project;
