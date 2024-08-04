import React, { useContext } from 'react';
import MobileNav from './MobileNav';
import Navigation from './Navigation';
import Logo from '../assets/images/header/logo.svg';
import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';
import '../assets/styles/Header.css';

const Header = () => {
  
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className='header'>
      <div className='header-container'>
        
        {/* logo */}
        <Link 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler} 
          to='/' 
          className='logo'
        >
          <img src={Logo} alt='logo' title='logo' />
        </Link>
        
        {/* nav - initially hidden - show on desktop mode */}
        <Navigation />
        
      </div>
        
      {/* mobile nav */}
      <MobileNav />

    </header>
  );
};

export default Header;
