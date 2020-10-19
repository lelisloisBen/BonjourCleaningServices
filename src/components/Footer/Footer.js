import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3">
            <div className="foot-box">
              <h6>QUICK CONTACT</h6>
              <ul>
                <li>(305)123-4567</li>
                <li>Contact@bonjour.com</li>
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
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="foot-box">
              <h6>OUR LOCATIONS</h6>
              <ul>
                <li>Miami - Miami-Dade</li>
                <li>Miami - Broward</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="subscribe">
              <h6>FOLLOW US</h6>
              <div className="social-icons">
                <Link to="/"><i className="fab fa-facebook-f" aria-hidden="true" /></Link>
                <Link to="/"><i className="fab fa-twitter" aria-hidden="true" /></Link>
                <Link to="/"><i className="fab fa-whatsapp" aria-hidden="true" /></Link>
                <Link to="/"><i className="fab fa-google" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="copyright">
              <Link to="/">© 2020 BonjourCleaning. All rights reserved</Link>
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