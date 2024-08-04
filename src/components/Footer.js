import React from 'react';
import Socials from './Socials';
import Navigation from './Navigation';
import '../assets/styles/Footer.css';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footer-socials">
                <Socials />
            </div>

            <div className="footer-nav">
                <Navigation />
            </div>

            <div className="footer-text">
                <h1>© {currentYear} All rights reserved</h1>
            </div>

        </footer>
    );
};

export default Footer;
