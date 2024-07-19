import React from 'react';

// import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';


// import routes, route, and useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom';

const AnimRoutes = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/portfolio" element={<Portfolio />} />
  </Routes>;
};

export default AnimRoutes;
