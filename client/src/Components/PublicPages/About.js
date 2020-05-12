import React from 'react'
import '../../styles/about.css'

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
                        <h3>Shubham </h3>
                        <p>Full Stack Developer</p>
                        <ul class="follow-us clearfix">
                        <li><a href="https://github.com/shubham-ambastha-vst-au4" class="fa fa-github"></a></li>
                        <li><a href="mailto:shubhams.saurav@gmail.com" class="fa fa-google"></a></li>
                        <li><a href="https://www.linkedin.com/in/shubhamambastha" class="fa fa-linkedin"></a></li>
                        </ul>
                     </div>
                  </li>
                  <li class="col-12 col-md-6 col-lg-3 m-2">
                     <div class="cnt-block equal-hight" style={{height: "349px;"}}>
                        <figure><img src="https://res.cloudinary.com/eagle-whitecollar/image/upload/v1574846692/muzammil_qxaqga.jpg" class="img-responsive" alt="" /></figure>
                        <h3>Muzammil </h3>
                        <p>Full Stack Developer</p>
                        <ul class="follow-us clearfix">
                        <li><a href="http://github.com/muzammil-khan-vst-au4" class="fa fa-github"></a></li>
                        <li><a href="mailto:muzammil.khan@outlook.in" class="fa fa-google"></a></li>
                        <li><a href="http://www.linkedin.com/in/muzammil-khan-" class="fa fa-linkedin"></a></li>
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
