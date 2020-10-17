import React, { Suspense, lazy, useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from './UserContext';
import './App.css';
import './css/pe-icon-7-stroke.css';

import BonjourNavbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

// const Home = lazy(() => import('./views/Home/Home'));
const Home = lazy(() => import('./views/Home1/Home1'));


function App() {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  const providerValue = useMemo(() => ({ windowHeight }), [ windowHeight ]);



  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
          <BonjourNavbar/>
            <section style={{minHeight: windowHeight}}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route render={() => <NotFound/>} />
              </Switch>
            </section>
          <Footer/>
        </Suspense>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
