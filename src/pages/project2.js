import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/project1.css'
import gif from '../images/gif.gif'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration:1500
});


function project2() {
    return (
        <>

            <Navbar />

            <section className="home">
                <div  className="content">
                    <h1 data-aos="fade-right" >Competition Tracking</h1>
                    <p  data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    <button data-aos="fade-right" className='btn'>Get Started Now</button>
                </div>
            </section>

            <div className="container">
            <div data-aos="fade-right" className="row mb-3">
                <div className="col-md-6">
                    <img className='m-3' src={gif} alt="..." />
                </div>
                <div className="col-md-6 bs">
                    <h1 className='text-center'>Competition Tracking</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
            </div>
            </div>

            <div className="container">
                <div data-aos="fade-right" className="row border shadow mb-5">
                    <div className="col-md-6 padding">
                        <h1 className='heading'>Have Anything To Scrape?</h1>
                        <p>Click That Button and Receive Free Quote Immediately</p>
                    </div>
                    <div className="col-md-6">
                        
                        <button className='btn custombtn'>Contact</button>
                    </div>
                </div>
            </div>

            <hr/>

            <Footer/>
        </>
    )
}

export default project2