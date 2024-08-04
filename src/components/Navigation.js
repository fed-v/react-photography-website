import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';
import '../assets/styles/Navigation.css';

const Navigation = () => {
  
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (

    <nav 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler} 
        className='nav'
    >
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/about' className='nav-link'>About</Link>
        <Link to='/contact' className='nav-link'>Contact</Link>
        <Link to='/portfolio' className='nav-link'>Portfolio</Link>
    </nav>
        
  );
};

export default Navigation;
