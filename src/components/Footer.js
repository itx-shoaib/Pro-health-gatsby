import React from 'react'
import '../css/HomePage.css'

const Footer = () => {
    return (
        <div>
            <div class="row justify-content-center paddingrow">
                <div class="col-md-3">
                    <h5 class="copyright">
                        © Prohealth 2022<br />
                        All Rights Resevered
                    </h5>
                </div>
                <div class="col-md-3">
                    <ul class="removebullets">
                        <li class="fontfooterstyle">Home</li>
                        <li class="fontfooterstyle">About Us</li>
                        <li class="fontfooterstyle">Project</li>
                        <li class="fontfooterstyle">News</li>
                        <li class="fontfooterstyle">Contact</li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul class="removebullets">
                        <li class="fontfooterstyle">EN</li>
                        <li class="fontfooterstyle">FRA</li>
                        <li class="fontfooterstyle">GRE</li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul class="removebullets">
                        <li class="fontfooterstyle">Facebook</li>
                        <li class="fontfooterstyle">Twitter</li>
                        <li class="fontfooterstyle">LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer