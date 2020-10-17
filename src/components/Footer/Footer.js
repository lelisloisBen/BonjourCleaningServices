import React from 'react';
// import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-2">
            <div className="foot-box">
              <h6>QUICK LINKS</h6>
              <ul>
                <li><a href="#">Help</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="foot-box">
              <h6>LEGAL STUFF</h6>
              <ul>
                <li>Terms of use</li>
                <li>Cookies</li>
                <li>Privacy Policy</li>
                <li>Security Policy</li>
                <li>Money back Guarantee</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="foot-box">
              <h6>OUR LOCATIONS</h6>
              <ul>
                <li>Boston</li>
                <li>Chicago</li>
                <li>London</li>
                <li>Los Angeles</li>
                <li>New York</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="subscribe">
              <h6>SUBSCRIBE</h6>
              <form className="form-inline" action="booking.html">
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <input type="email" className="form-control subscribe-form" id="inlineFormInputGroup" placeholder="Enter your email" />
                  <button type="submit" className="input-group-addon subscribe-btn"><span className="pe-7s-angle-right" /></button>
                </div>
              </form>
              <div className="social-icons">
                <a href="/"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
                <a href="/"><i className="fab fa-twitter" aria-hidden="true" /></a>
                <a href="/"><i className="fab fa-whatsapp" aria-hidden="true" /></a>
                <a href="/"><i className="fab fa-google" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="copyright">
              <a href="#">© 2016 Cleanly. All rights reserved</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
      //   <footer className={styles.footer}>
      //    <div className="container">
      //       <div className="agileits-contact-addrss">
      //          <div className="row top-gap">
      //             <div className="col-md-7 header-side">
      //                <p> 
      //                   © 2020 GewJots. All Rights Reserved | Design by GewJots LLC
      //                </p>
      //             </div>
      //             <div className="col-md-5 header-side">
      //                <div className={styles.socialBtn}>
      //                   <ul>
      //                      <li className="mr-2"><a href="/"><span className="fab fa-facebook-f"></span></a></li>
      //                      <li className="mr-2"><a href="/"><span className="fab fa-google"></span></a></li>
      //                      <li className="mr-2"><a href="/"><span className="fab fa-twitter"></span></a></li>
      //                      <li className="mr-2"><a href="/"><span className="fab fa-whatsapp"></span></a></li>
      //                   </ul>
      //                </div>
      //             </div>
      //          </div>
      //       </div>
      //    </div>
      // </footer>
    );
};

export default Footer;