import React from 'react';

import service1 from '../../img/service-img1.jpg';
import service2 from '../../img/service-img2.jpg';
import service3 from '../../img/service-img3.jpg';
import service4 from '../../img/service-img4.jpg';

const Home1 = () => {
    return (
        <div>
        <section className="slider">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="slider-content">
                  <h1>Cleaning Made Easy</h1>
                  <h3>Book expert home cleaners and handymen at a moment's notice. Just pick a time and we’ll do the rest.</h3>
                  <form className="form-wrap" action="booking.html">
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <input type="text" placeholder="Email Address" className="btn-group1" />
                      <input type="number" placeholder="Zip Code" className="btn-group2" />
                      <button type="submit" className="btn-form">Continue<i className="pe-7s-angle-right" /></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="howit-work main-block center-block" id="howitworks">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>How it <span>works</span></h2>
                <h6>We’ve made all the hardwork for making it simple for you. Here’s how it works</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="howit-wrap">
                  <span className="pe-7s-date" />
                  <h4>Book a Cleaning</h4>
                  <p>Click the book now button to make a booking on your preffered date and time</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="howit-wrap">
                  <span className="pe-7s-lock" />
                  <h4>Confirm Booking</h4>
                  <p>We will confirm your booking along with your instructions via secure transaction.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="howit-wrap">
                  <span className="pe-7s-home" />
                  <h4>We’ll Clean it</h4>
                  <p>Our trusted &amp; experienced maid will come to your door-step on the time for a cleaning</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial main-block center-block">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Don’t take our <span>word</span></h2>
                <h6>Read what our past customers said about our cleaning and services.</h6>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="testi-block">
                  <i className="fa fa-quote-left" aria-hidden="true" />
                  <p>Maid Services NYC is a wonderful service. I utilized their services to clean a one bedroom apartment I was staying in NYC after throwing a get together. They were prompt, left the place spotless, and very professional. </p>
                </div>
                <div className="testi-title">
                  <h4>Sandra</h4>
                  <p>Marketing Staff, New York</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testi-block">
                  <i className="fa fa-quote-left" aria-hidden="true" />
                  <p>I had them out to help me clean my new place for an office dinner I was having. I was very happy with the results. Jennifer came to the location on time. It is such a treat to have the home professionally cleaned. </p>
                </div>
                <div className="testi-title">
                  <h4>Jessica</h4>
                  <p>Photographer, New York</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testi-block">
                  <i className="fa fa-quote-left" aria-hidden="true" />
                  <p>They did such a good job. Whether you want to give a unique gift or have your own home cleaned, Maid for you provides a large range of top-notch services that I highly recommend to anyone. </p>
                </div>
                <div className="testi-title">
                  <h4>Samantha</h4>
                  <p>Physical Therapist, Manhattan</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-title" id="services">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Check out some of our <span>services!<span /></span></h2>
              </div>
            </div>
          </div>
        </section>
        <section className="service">
          <div className="img-objectfit">
            <div className="grid">
              <figure className="effect-lily">
                <img src={service1} className="img-fluid" alt="service1" />
              </figure>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6" />
              <div className="col-md-6">
                <div className="service-link">
                  <h3>Make Better <span>Living room</span></h3>
                  <ul>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Cleaning and highrise dusting</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Furniture Dusting/Vacuuming</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Fixtures cleaning - A/C,Fan etc</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Wall marks cleaning (Washable paint)</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Floor scrubbing / Dry and Wet mop</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Carpet vacuuming</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="service-link service-link1">
                  <h3>Your Beautiful <span>Kitchen</span></h3>
                  <ul>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Wash and scrub sink</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Wash cabinet faces and appliances</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Dust and wipe all reachable surfaces</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Wipe mirrors and glass fixtures</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Vacuum and mop all floors</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Take out trash and recyclables</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6" />
            </div>
          </div>
          <div className="img-objectfit_1">
            <div className="grid">
              <figure className="effect-lily">
                <img src={service2} className="img-fluid" alt="service2" />
              </figure>
            </div>
          </div>
        </section>
        <section className="service">
          <div className="img-objectfit">
            <div className="grid">
              <figure className="effect-lily">
                <img src={service3} className="img-fluid" alt="service3" />
              </figure>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6" />
              <div className="col-md-6">
                <div className="service-link">
                  <h3>Tidy <span>Bathroom</span></h3>
                  <ul>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Wash and sanitize toilet, shower and sink</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Dust and wipe all reachable surfaces</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Wipe door handles and light switches</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Wipe mirrors and glass fixtures</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Vacuum and mop all floors</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Take out trash and recyclables</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="service-link service-link1">
                  <h3>The Perfect <span>Bedroom</span></h3>
                  <ul>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Make beds and change linens</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Dust and wipe all reachable surfaces</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Wipe door handles and light switches</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Wipe mirrors and glass fixtures</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Vacuum and mop all floors</a></li>
                    <li><i className="fa fa-check" aria-hidden="true" /><a href="#">Take out trash and recyclables</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6" />
            </div>
          </div>
          <div className="img-objectfit_1">
            <div className="grid">
              <figure className="effect-lily">
                <img src={service4} className="img-fluid" alt="service4" />
              </figure>
            </div>
          </div>
        </section>
        <section className="booking main-block center-block">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Don’t wait, Book a cleaning now.</h2>
                <h6>Book expert home cleaners and handymen at a moment's notice. Just pick a time and we’ll do the rest.</h6>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <form className="form-wrap mt-5" action="booking.html">
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <input type="email" placeholder="Email Address" className="btn-group1" />
                    <input type="number" placeholder="Zip Code" className="btn-group2" />
                    <button type="submit" className="btn-form">Continue<i className="pe-7s-angle-right" /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
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
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
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
    </div>

    )
}

export default Home1;



