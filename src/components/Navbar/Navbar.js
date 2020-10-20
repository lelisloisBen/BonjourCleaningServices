import React from 'react';
import { Link } from 'react-router-dom';

const BonjourNavbar = () => {

    return (
        <>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand" to="/">
                      <b style={{color: "#45C3D3"}} >Bonjour</b>
                      <b style={{color: "#565F60"}} >Cleaning</b>
                    </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="/">How it works</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">Our Services </a>
                      </li>
                      <li><Link to="/booking" className="btn btn-info">Book a Cleaning</Link></li>
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