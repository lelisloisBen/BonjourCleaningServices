import React, { useContext } from 'react';
import styles from './Home.module.css';
import { UserContext } from '../../UserContext';
import PlacesAutocomplete from '../../components/googleAutocomplete/usePlaceAutocomplete'

const Home = () => {

    const {windowHeight} = useContext(UserContext);

    return (
    <>
        <section className={styles.section}>
            <div className={["text-center", styles.main].join(' ')} style={{minHeight: windowHeight}}>
                <h1>
                    Bonjour Cleaning Services
                </h1>
            </div>
        </section>
        <div>
            <h1>Location's Information:</h1>
            <h2>Type of Location:</h2>
            <br/>
            <div class="dropdown-container">
                <select className="customSelect">
                    <option value="house">HOUSE</option>
                    <option value="apartment">APARTMENT</option>
                    <option value="office">OFFICE</option>
                    <option value="restaurant">RESTAURANT</option>
                    <option value="other">OTHER</option>
                </select>
            </div>
            <hr/>
            <h2>ROOMS:</h2>
            <br/>
            <div class="dropdown-container">
                <select className="customSelect">
                    <option value="studio">STUDIO</option>
                    <option value="1 bedroom">1 BEDROOM</option>
                    <option value="2 bedrooms">2 BEDROOMS</option>
                    <option value="3 bedrooms">3 BEDROOMS</option>
                    <option value="4 bedrooms">4 BEDROOMS</option>
                    <option value="5 bedrooms">5 BEDROOMS</option>
                    <option value="6 bedrooms">6 BEDROOMS</option>
                    <option value="7 bedrooms">7 BEDROOMS</option>
                    <option value="8 bedrooms">8 BEDROOMS</option>
                    <option value="9 bedrooms">9 BEDROOMS</option>
                    <option value="10 bedrooms">10 BEDROOMS</option>
                </select>
            </div>
            <hr/>
            <h2>MORE DETAILS (option):</h2>
            <br/>
            <textarea className="customTextarea" placeholder="Add more details..." >
            </textarea>
        </div>
        <div>
            <h1>Enter Your Address:</h1>
            <PlacesAutocomplete/>
        </div>
    </>
    );
};

export default Home;


 