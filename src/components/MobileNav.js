
// Added keyboard navigation and ARIA attributes to the mobile navigation to significantly improve accessibility. 

import React, { useState, useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/styles/MobileNav.css'; // Import the CSS file


// menu variants
const menuVariants = {
  hidden: {
    x: '100%',
  },
  visible: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  // Close menu on escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenMenu(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Focus the first menu item when menu opens
  useEffect(() => {
    if (openMenu && menuRef.current) {
      const firstMenuItem = menuRef.current.querySelector('a');
      firstMenuItem?.focus();
    }
  }, [openMenu]);

  return (
    <nav className='mobile-nav'>
      {/* nav open button */}
      <button
        onClick={() => setOpenMenu(true)}
        className='menu-open-btn'
        aria-label="Open menu"
        aria-controls="mobile-menu"
        aria-expanded={openMenu}
      >
        <CgMenuRight />
      </button>

      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'visible' : 'hidden'}
        className='mobile-menu'
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        ref={menuRef}
      >
        {/* icon */}
        <button
          onClick={() => setOpenMenu(false)}
          className='menu-close-btn'
          aria-label="Close menu"
        >
          <IoMdClose />
        </button>

        {/* menu list */}
        <ul className='menu-list'>
          <li>
            <Link to='/' onClick={() => setOpenMenu(false)}>Home</Link>
          </li>
          <li>
            <Link to='/about' onClick={() => setOpenMenu(false)}>About</Link>
          </li>
          <li>
            <Link to='/contact' onClick={() => setOpenMenu(false)}>Contact</Link>
          </li>
          <li>
            <Link to='/portfolio' onClick={() => setOpenMenu(false)}>Portfolio</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;