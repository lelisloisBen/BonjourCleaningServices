import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Bed from '../../img/double-bed.svg';
import Bath from '../../img/shower.svg';

const Booking = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <section className="booking-details center-block main-block">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Book your cleaning</h2>
              <h6>Its time to book our cleaning service for your home or apartment.</h6>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-8 set-sm-fit mb-4">
              <form action="#">
                <div className="preference-title">
                  <h4>Cleaning Preferences</h4>
                </div>
                <div className="preferences">
                  <div className="preference-radio">
                    <p>What type of cleaning?</p>
                    <div className="row">
                      <div className="col-xs-12 col-md-4 sm-box">
                        <div className="styled-radio">
                          <input type="radio" id="option-one" name="selector" />
                          <label htmlFor="option-one">STANDARD</label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-4 sm-box">
                        <div className="styled-radio">
                          <input type="radio" id="option-two" name="selector" />
                          <label htmlFor="option-two">DEEP</label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-4 sm-box">
                        <div className="styled-radio">
                          <input type="radio" id="option-three" name="selector" />
                          <label htmlFor="option-three">MOVE IN/OUT</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="preference-radio mt-4">
                    <p>How often would you like cleaning?</p>
                    <div className="row">
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2">
                          <input type="radio" id="one-time" name="selector1" />
                          <label htmlFor="one-time">ONE TIME</label>
                        </div>
                      </div>
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2">
                          <input type="radio" id="weekly" name="selector1" />
                          <label htmlFor="weekly" className="radio-offer" data-toggle="tooltip" data-placement="bottom" title data-original-title="SAVE UP TO 15%">WEEKLY</label>
                          <span><i className="fa fa-star" aria-hidden="true" /></span>
                        </div>
                      </div>
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2">
                          <input type="radio" id="bi-weekly" name="selector1" />
                          <label htmlFor="bi-weekly">BI-WEEKLY</label>
                        </div>
                      </div>
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2">
                          <input type="radio" id="monthly" name="selector1" />
                          <label htmlFor="monthly">MONTHLY</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="preference-about_home">
                        <h4>Tell us about your home</h4>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="preference-icon">
                        <img src={Bed} />
                        <p>BEDROOMS</p>
                      </div>
                      <div className="preference-quantity">
                        <div className="counter js-counter">
                          <div className="counter__item">
                            <a className="counter__minus js-counter-btn fa fa-minus" aria-hidden="true" data-action="minus" />
                          </div>
                          <div className="counter__item counter__item--center">
                            <input className="counter__value js-counter-value" type="text" defaultValue={1} disabled="disabled" tabIndex={-1} min={0} max={10} required />
                          </div>
                          <div className="counter__item">
                            <a className="counter__plus js-counter-btn fa fa-plus" aria-hidden="true" data-action="plus" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="preference-icon">
                        <img src={Bath} />
                        <p>BATHROOMS</p>
                      </div>
                      <div className="preference-quantity">
                        <div className="counter js-counter">
                          <div className="counter__item">
                            <a className="counter__minus js-counter-btn fa fa-minus" aria-hidden="true" data-action="minus" />
                          </div>
                          <div className="counter__item counter__item--center">
                            <input className="counter__value js-counter-value" type="text" defaultValue={1} disabled="disabled" tabIndex={-1} min={0} max={10} required />
                          </div>
                          <div className="counter__item">
                            <a className="counter__plus js-counter-btn fa fa-plus" aria-hidden="true" data-action="plus" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="preference-radio mt-4">
                    <p>Need any extras?</p>
                    <div className="row">
                      <div className="col-md-12">
                        <ul className="topics d-flex flex-wrap">
                          <li><input type="checkbox" id="box-1" />
                            <label htmlFor="box-1"><svg className="checked-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 463 463" style={{enableBackground: 'new 0 0 463 463'}} xmlSpace="preserve" width="65px" height="65px"><g><g>
                                    <g>
                                      <g>
                                        <path d="M431.5,76h-400C14.131,76,0,90.131,0,107.5v224c0,14.785,10.241,27.216,24,30.591v9.409c0,8.547,6.953,15.5,15.5,15.5h16     c8.547,0,15.5-6.953,15.5-15.5V363h321v8.5c0,8.547,6.953,15.5,15.5,15.5h16c8.547,0,15.5-6.953,15.5-15.5v-9.409     c13.759-3.374,24-15.806,24-30.591v-224C463,90.131,448.869,76,431.5,76z M56,371.5c0,0.275-0.224,0.5-0.5,0.5h-16     c-0.276,0-0.5-0.225-0.5-0.5V363h17V371.5z M31.5,348c-9.098,0-16.5-7.401-16.5-16.5v-224C15,98.401,22.402,91,31.5,91H352v256.5     c0,0.169,0.014,0.334,0.025,0.5H31.5z M424,371.5c0,0.275-0.224,0.5-0.5,0.5h-16c-0.276,0-0.5-0.225-0.5-0.5V363h17V371.5z      M448,331.5c0,9.099-7.402,16.5-16.5,16.5h-64.525c0.011-0.166,0.025-0.331,0.025-0.5V91h64.5c9.098,0,16.5,7.401,16.5,16.5     V331.5z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                        <path d="M327.5,108h-288c-4.142,0-7.5,3.357-7.5,7.5v208c0,4.143,3.358,7.5,7.5,7.5h288c4.142,0,7.5-3.357,7.5-7.5v-208     C335,111.357,331.642,108,327.5,108z M320,316H47V123h273V316z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                        <path d="M415.5,124h-16c-8.547,0-15.5,6.953-15.5,15.5v16c0,8.547,6.953,15.5,15.5,15.5h16c8.547,0,15.5-6.953,15.5-15.5v-16     C431,130.953,424.047,124,415.5,124z M416,155.5c0,0.275-0.224,0.5-0.5,0.5h-16c-0.276,0-0.5-0.225-0.5-0.5v-16     c0-0.275,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.225,0.5,0.5V155.5z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                        <path d="M423.5,188h-32c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h32c4.142,0,7.5-3.357,7.5-7.5S427.642,188,423.5,188z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                        <path d="M423.5,252h-32c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h32c4.142,0,7.5-3.357,7.5-7.5S427.642,252,423.5,252z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                        <path d="M423.5,220h-32c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h32c4.142,0,7.5-3.357,7.5-7.5S427.642,220,423.5,220z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                        <path d="M168,240.866c0,13.16,5.269,20.18,9.502,25.819c3.772,5.026,6.498,8.658,6.498,16.814c0,4.143,3.358,7.5,7.5,7.5     c4.142,0,7.5-3.357,7.5-7.5c0-13.159-5.269-20.179-9.501-25.818c-3.773-5.026-6.499-8.658-6.499-16.815     c0-8.168,2.727-11.804,6.5-16.835c4.232-5.644,9.5-12.668,9.5-25.836c0-13.173-5.267-20.2-9.498-25.848     c-3.775-5.036-6.502-8.676-6.502-16.853c0-4.143-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.357-7.5,7.5     c0,13.174,5.267,20.201,9.499,25.849c3.774,5.036,6.501,8.676,6.501,16.852c0,8.168-2.727,11.804-6.5,16.836     C173.268,220.676,168,227.699,168,240.866z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                        <path d="M208.484,248.358c2.473,0,4.668-1.198,6.036-3.046c5.37-7.161,16.48-22.023,16.48-47.116     c0-10.194-1.838-19.807-5.463-28.568c-1.584-3.828-5.972-5.648-9.798-4.065c-3.828,1.584-5.646,5.971-4.063,9.798     c2.869,6.935,4.324,14.617,4.324,22.834c0,20.041-8.375,31.307-13.438,38.059c-0.989,1.271-1.578,2.868-1.578,4.604     C200.984,245.001,204.342,248.358,208.484,248.358z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                        <path d="M148.324,273.877c0.949,0,1.914-0.182,2.845-0.563c3.832-1.573,5.663-5.955,4.09-9.787     c-2.826-6.884-4.259-14.509-4.259-22.661c0-20.137,8.458-31.415,13.512-38.153c0.138-0.184,0.267-0.374,0.387-0.569     c1.484-2.41,1.476-5.506-0.008-7.916c-2.17-3.528-6.79-4.628-10.318-2.458c-1.064,0.655-1.908,1.533-2.507,2.537     c-5.507,7.361-16.066,22.1-16.066,46.559c0,10.116,1.811,19.657,5.383,28.358C142.573,272.123,145.372,273.877,148.324,273.877z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                      </g>
                                    </g>
                                  </g></g> </svg> CLEAN OVEN</label>
                          </li>
                          <li><input type="checkbox" id="box-2" />
                            <label htmlFor="box-2"><svg className="checked-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve" width="65px" height="65px"><g><g>
                                    <g>
                                      <path d="M486.794,454.344h-22.919V10.199C463.875,4.567,459.309,0,453.676,0H58.324c-5.633,0-10.199,4.567-10.199,10.199v444.145    H25.206c-5.633,0-10.199,4.567-10.199,10.199v37.258c0,5.632,4.566,10.199,10.199,10.199h461.587    c5.633,0,10.199-4.567,10.199-10.199v-37.258C496.993,458.91,492.427,454.344,486.794,454.344z M68.523,20.398h374.953v433.946    H68.523V20.398z M476.594,491.602H35.406v-16.859h441.189V491.602z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    </g>
                                  </g><g>
                                    <g>
                                      <path d="M237.371,40.363H95.583c-5.633,0-10.199,4.567-10.199,10.199v375.687c0,5.632,4.566,10.199,10.199,10.199h141.788    c5.633,0,10.199-4.567,10.199-10.199V50.563C247.57,44.931,243.004,40.363,237.371,40.363z M105.782,60.762h99.842    c-3.257,61.391-19.51,215.545-99.842,300.493V60.762z M105.782,416.05v-26.456c43.97-38.766,76.845-98.796,97.742-178.539    c15.624-59.618,20.82-116.633,22.529-150.293h1.118V416.05H105.782z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    </g>
                                  </g><g>
                                    <g>
                                      <path d="M171.134,78.656c-5.633,0-10.199,4.567-10.199,10.199v31.048c0,5.632,4.566,10.199,10.199,10.199    c5.633,0,10.199-4.567,10.199-10.199V88.855C181.334,83.223,176.766,78.656,171.134,78.656z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    </g>
                                  </g><g>
                                    <g>
                                      <path d="M133.876,77.621c-5.633,0-10.199,4.567-10.199,10.199v133.508c0,5.632,4.566,10.199,10.199,10.199    c5.633,0,10.199-4.567,10.199-10.199V87.82C144.075,82.188,139.509,77.621,133.876,77.621z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    </g>
                                  </g><g>
                                    <g>
                                      <path d="M416.417,40.363H274.629c-5.633,0-10.199,4.567-10.199,10.199v375.687c0,5.632,4.566,10.199,10.199,10.199h141.788    c5.633,0,10.199-4.567,10.199-10.199V50.563C426.616,44.931,422.05,40.363,416.417,40.363z M406.217,416.05H284.828V60.762h1.118    c1.709,33.66,6.906,90.675,22.529,150.293c20.898,79.742,53.773,139.772,97.742,178.539V416.05z M406.218,361.255    c-80.332-84.948-96.585-239.102-99.842-300.493h99.842V361.255z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    </g>
                                  </g><g>
                                    <g>
                                      <path d="M340.866,78.656c-5.633,0-10.199,4.567-10.199,10.199v31.048c0,5.632,4.566,10.199,10.199,10.199    c5.633,0,10.199-4.567,10.199-10.199V88.855C351.065,83.223,346.499,78.656,340.866,78.656z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    </g>
                                  </g><g>
                                    <g>
                                      <path d="M378.124,205.956c-5.633,0-10.199,4.567-10.199,10.199v5.174c0,5.632,4.566,10.199,10.199,10.199    s10.199-4.567,10.199-10.199v-5.174C388.323,210.522,383.757,205.956,378.124,205.956z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    </g>
                                  </g><g>
                                    <g>
                                      <path d="M378.124,77.621c-5.633,0-10.199,4.567-10.199,10.199v95.215c0,5.632,4.566,10.199,10.199,10.199    s10.199-4.567,10.199-10.199V87.82C388.323,82.188,383.757,77.621,378.124,77.621z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    </g>
                                  </g></g> </svg>CLEAN WINDOWS</label>
                          </li>
                          <li><input type="checkbox" id="box-3" defaultChecked />
                            <label htmlFor="box-3"><svg className="checked-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 439.5 439.5" style={{enableBackground: 'new 0 0 439.5 439.5'}} xmlSpace="preserve" width="65px" height="65px"><g><g>
                                    <path d="M295.595,0H143.905c-17.645,0-32,14.355-32,32v399.5c0,4.418,3.582,8,8,8h199.689c4.418,0,8-3.582,8-8V32   C327.595,14.355,313.239,0,295.595,0z M127.905,423.5V280.25h136.023c4.418,0,8-3.582,8-8s-3.582-8-8-8H127.905V47.75h136.023   c4.418,0,8-3.582,8-8s-3.582-8-8-8h-80.097c-0.133-4.301-3.654-7.75-7.987-7.75s-7.854,3.449-7.987,7.75h-8.025   c-0.133-4.301-3.654-7.75-7.987-7.75s-7.854,3.449-7.987,7.75h-15.939c0.135-8.706,7.25-15.75,15.987-15.75h151.689   c8.738,0,15.852,7.044,15.987,15.75h-15.653c-4.418,0-8,3.582-8,8s3.582,8,8,8h15.666v216.5h-15.666c-4.418,0-8,3.582-8,8   s3.582,8,8,8h15.666V423.5H127.905z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    <path d="M199.845,295.75h-47.939c-4.418,0-8,3.582-8,8s3.582,8,8,8h47.939c4.418,0,8-3.582,8-8S204.263,295.75,199.845,295.75z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    <path d="M199.845,232h-47.939c-4.418,0-8,3.582-8,8s3.582,8,8,8h47.939c4.418,0,8-3.582,8-8S204.263,232,199.845,232z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                  </g></g> </svg>CLEAN FRIDGE</label>
                          </li>
                          <li><input type="checkbox" id="box-4" />
                            <label htmlFor="box-4"><svg className="checked-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511 511" style={{enableBackground: 'new 0 0 511 511'}} xmlSpace="preserve" width="65px" height="65px"><g><g>
                                    <path d="M503.5,388h-0.681c-3.93-84.479-73.884-152-159.318-152H263v-16.5c0-8.547-6.953-15.5-15.5-15.5h-80   c-8.547,0-15.5,6.953-15.5,15.5V236h-32.121l11.814-106.322c0.93-8.368,7.98-14.678,16.399-14.678H319.5   c12.958,0,23.5-10.542,23.5-23.5S332.458,68,319.5,68H98.179c-32.761,0-59.925,24.583-63.185,57.182L8.712,388H7.5   c-4.142,0-7.5,3.358-7.5,7.5v40c0,4.142,3.358,7.5,7.5,7.5h496c4.142,0,7.5-3.358,7.5-7.5v-40C511,391.358,507.642,388,503.5,388z    M167,219.5c0-0.276,0.224-0.5,0.5-0.5h80c0.276,0,0.5,0.224,0.5,0.5V236h-81V219.5z M98.179,83H319.5c4.687,0,8.5,3.813,8.5,8.5   s-3.813,8.5-8.5,8.5H148.092c-16.073,0-29.532,12.046-31.307,28.021L104.787,236h-65.8L49.92,126.674   C52.41,101.776,73.157,83,98.179,83z M37.487,251H111.5h8h224c77.163,0,140.394,60.793,144.307,137H23.788L37.487,251z M496,428H15   v-25h481V428z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    <path d="M453.971,331.889C431.196,292.481,388.866,268,343.5,268c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5   c40.026,0,77.38,21.609,97.483,56.395c1.39,2.404,3.91,3.749,6.5,3.749c1.273,0,2.564-0.325,3.746-1.008   C454.817,340.063,456.044,335.475,453.971,331.889z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                    <path d="M311.501,268h-24.005c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24.005c4.142,0,7.5-3.358,7.5-7.5   S315.644,268,311.501,268z" data-original="#000000" className="active-path" data-old_color="#e2e6e9" fill="#e2e6e9" />
                                  </g></g> </svg>IRONING</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="preference-radio mt-4">
                    <p>Do you have any special requerments? <span className="optional-fade">(optional)</span></p>
                    <div className="row">
                      <div className="col-md-12">
                        <textarea className="optinal-textarea" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="preference-about_home">
                        <h4>Choose hours and dates</h4>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="preference-radio mt-4">
                        <p>How many hours?</p>
                        <div className="preference-quantity houres">
                          <div className="counter js-counter">
                            <div className="counter__item">
                              <a className="counter__minus js-counter-btn fa fa-minus" aria-hidden="true" data-action="minus" />
                            </div>
                            <div className="counter__item counter__item--center">
                              <input className="counter__value js-counter-value" type="text" defaultValue={1} disabled="disabled" tabIndex={-1} />
                            </div>
                            <div className="counter__item">
                              <a className="counter__plus js-counter-btn fa fa-plus" aria-hidden="true" data-action="plus" />
                            </div>
                          </div>
                          <p>his is what we think the best based on your preferences. Feel free to change it if you want.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="preference-radio mt-4">
                        <p>Choose a date?</p>
                        <div className="form-group">
                          <div className="col-xs-5 date">
                            <div className="input-group input-append date" id="datePicker">
                                {/* <input type="text" className="form-control" name="date" /> */}
                                <DatePicker 
                                    className="form-control"
                                    selected={startDate} 
                                    onChange={date => setStartDate(date)} 
                                />
                              <span className="input-group-append add-on calendar-add-on"><i className="far fa-calendar-alt" aria-hidden="true" /></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="preference-radio mt-4">
                    <p>When do you like to start?</p>
                    <div className="row">
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2">
                          <input type="radio" id="timer1" name="selector2" />
                          <label htmlFor="timer1">7:00 AM</label>
                        </div>
                      </div>
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2">
                          <input type="radio" id="timer2" name="selector2" />
                          <label htmlFor="timer2">9:00 AM</label>
                        </div>
                      </div>
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2 radio-disable">
                          <input type="radio" id="timer3" name="selector2" disabled />
                          <label htmlFor="timer3" disabled>11:00 PM</label>
                        </div>
                      </div>
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2">
                          <input type="radio" id="timer4" name="selector2" />
                          <label htmlFor="timer4">1:00 PM</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2">
                          <input type="radio" id="timer5" name="selector2" />
                          <label htmlFor="timer5">3:00 PM</label>
                        </div>
                      </div>
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2">
                          <input type="radio" id="timer6" name="selector2" />
                          <label htmlFor="timer6">5:00 PM</label>
                        </div>
                      </div>
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2">
                          <input type="radio" id="timer7" name="selector2" />
                          <label htmlFor="timer7">7:00 PM</label>
                        </div>
                      </div>
                      <div className="col-md-3 sm-box">
                        <div className="styled-radio styled-radio2 radio-disable">
                          <input type="radio" id="timer8" name="selector2" disabled />
                          <label htmlFor="timer8" disabled>9:00 PM</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="preference-about_home">
                        <h4>Payment Method</h4>
                        <div className="payment-icon">
                          <i className="fa fa-lock" aria-hidden="true" />
                          <p>256 bit Secure<br /> SSL Encryption</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="preference-radio mt-4">
                    <p>Credit Card details</p>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card-details">
                          <input type="number" placeholder="Card number" className="card-number card-num" />
                          <img src="images/visa.png" className="visa-img" alt="visa-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-3">
                        <div className="card-details">
                          <input type="number" placeholder="MM/YY" className="card-number" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card-details">
                          <input type="number" placeholder="CVV" className="card-number" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card-details">
                          <input type="text" placeholder="Name as on Card" className="card-number" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="preference-radio mt-5">
                    <p>Pesonal Details</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-details">
                          <input type="email" placeholder="Email Address" className="card-number" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card-details">
                          <input type="number" placeholder="Phone Number" className="card-number" />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-9">
                        <div className="card-details">
                          <input type="text" placeholder="Your Full Address" className="card-number" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card-details">
                          <input type="number" placeholder={10023} className="card-number" />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="terms-reminder">
                          <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">Check this custom checkbox</span>
                          </label>
                        </div>
                        <div className="terms-reminder">
                          <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">I read and agree to the <a href="#">terms &amp; conditions</a></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-12">
                        <button className="btn btn-block complete-booking" type="submit"><span className="pe-7s-unlock" />Complete Booking <span className="d-none d-md-inline-block">via Secure Server</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4 set-sm-fit">
              <div style={{height: 'auto'}} />
                <div data-toggle="affix">
                    <div className="preference-title">
                        <h4>Booking Summary</h4>
                    </div>
                    <div className="fesilities">
                        <ul>
                            <li><i className="fa fa-paint-brush" aria-hidden="true" />
                            <p>Standard Cleaning</p>
                            </li>
                            <li><i className="fa fa-calendar" aria-hidden="true" />
                            <p>Tues. 12/31/2016 @ 9:00 AM</p>
                            </li>
                            <li><i className="fa fa-clock-o" aria-hidden="true" />
                            <p>4 hours</p>
                            </li>
                            <li><i className="fa fa-refresh" aria-hidden="true" />
                            <p>One time</p>
                            </li>
                            <li><i className="fa fa-map-marker" aria-hidden="true" />
                            <p>1650 Broadway Apt. 23B New York, NY 10023</p>
                            </li>
                        </ul>
                        <h4>Total cost<span>$329</span></h4>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Booking;