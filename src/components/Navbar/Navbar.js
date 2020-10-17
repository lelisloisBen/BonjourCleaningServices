import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

import logo from '../../img/logo.png';

const BonjourNavbar = () => {

    return (
        <>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="/"><img src={logo} alt="logo" /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#howitworks">How it works</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#services">Our Services </a>
                      </li>
                      <li><a href="booking.html" className="btn btn-info">Book a Cleaning</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* <nav className={["navbar fixed-top navbar-expand-lg navbar-light", styles.navBarI].join(' ')}>
            <div className="container-fluid">
                <ul className="nav navbar-nav navbar-left mobile mx-auto">
                    <Link className={styles.links} to="/">
                        HOME
                    </Link>
                    <Link className={styles.links} to="/">
                        ABOUT
                    </Link>
                    <Link className={styles.links} to="/">
                        SERVICE
                    </Link>
                    <Link className={styles.links} to="/">
                        CONTACT
                    </Link>
                </ul>
            </div>
        </nav> */}
        </>
    );
};

export default BonjourNavbar;