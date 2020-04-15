import React from 'react'
import './about.css'

const About = () => {
    return (
           <section class="our-webcoderskull padding-lg">
            <div class="container">
               <div class="row heading heading-icon">
                  <h2>Our Team</h2>
               </div>
               <ul class="row">
                  <li class="col-12 col-md-6 col-lg-3">
                  </li>
                  <li class="col-12 col-md-6 col-lg-3 m-2">
                     <div class="cnt-block equal-hight" style={{height: "349px;"}}>
                        <figure><img src="https://res.cloudinary.com/eagle-whitecollar/image/upload/v1574846692/shubham_uxnlr9.jpg" class="img-responsive" alt="" /></figure>
                        <h3><a href="#">Shubham </a></h3>
                        <p>Full Stack Developer</p>
                        <ul class="follow-us clearfix">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </li>
                  <li class="col-12 col-md-6 col-lg-3 m-2">
                     <div class="cnt-block equal-hight" style={{height: "349px;"}}>
                        <figure><img src="https://res.cloudinary.com/eagle-whitecollar/image/upload/v1574846692/muzammil_qxaqga.jpg" class="img-responsive" alt="" /></figure>
                        <h3><a href="http://www.webcoderskull.com/">Muzammil </a></h3>
                        <p>Full Stack Developer</p>
                        <ul class="follow-us clearfix">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </li>
                  <li class="col-12 col-md-6 col-lg-3">
                  </li>
               </ul>
            </div>
            </section>

    )
}

export default About
