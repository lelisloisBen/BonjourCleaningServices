import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const BonjourNavbar = () => {

    return (
        <>
        <nav className={["navbar fixed-top navbar-expand-lg navbar-light", styles.navBarI].join(' ')}>
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
        </nav>
        </>
    );
};

export default BonjourNavbar;