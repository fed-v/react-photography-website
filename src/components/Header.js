import React, { useContext } from 'react';
import MobileNav from './MobileNav';
import Logo from '../assets/images/header/logo.svg';
import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';

const Header = () => {

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full px-[30px] lg-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>

        {/* logo */}
        <Link 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler} 
          to='/' className='max-w-[200px]'
        >
          <img src={Logo} alt='logo' title='logo' />
        </Link>
          
        {/* nav - initially hidden - show on desktop mode */}
        <nav 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler} 
          className='hidden lg:flex gap-x-4'
        >
          <Link to='/' className='text-[#696c6d] hover:text-primary transition'>Home</Link>
          <Link to='/about' className='text-[#696c6d] hover:text-primary transition'>About</Link>
          <Link to='/contact' className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
          <Link to='/portfolio' className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
        </nav>
        
      </div>
        
      {/* mobile nav */}
      <MobileNav />

    </header>
  );
};

export default Header;
