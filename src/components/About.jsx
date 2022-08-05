import React from 'react'
import '../css/aboutus.css';
import Footer from './Footer';
import Navbar from './Navbar';

const About = () => {
    return (
        <>
            <Navbar/>
            <div class="section">
                <div class="container">
                    <div class="content-section">
                        <div class="title">
                            <h1>About Us</h1>
                        </div>
                        <div class="content">
                            <h3>
                                Pro-Health is Pakistan’s Leading Healthcare Facility Planner,
                                established since 2001.
                            </h3>
                            <p>
                                They specialize in the field of Healthcare
                                Engineering ( Design, Planning , Equipment Management), Healthcare
                                Project Management and provide turnkey solutions to it’s client.
                                <br /><br />
                                With over 50+ Projects (both National & International) to their
                                credit, they are now the only company doing EPC healthcare
                                projects in partnership with their construction company registered
                                under category C1 at PEC
                            </p>
                        </div>
                        <div class="social">
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="image-section">
                        <img
                            alt='...' src="https://www.pro-health.biz/wp-content/uploads/2019/07/BUCH-Hospital.jpg"
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About