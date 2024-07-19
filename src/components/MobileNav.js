
// Added keyboard navigation and ARIA attributes to the mobile navigation to significantly improve accessibility. 

import React, { useState, useEffect, useRef } from 'react';

// import icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';

// import Link
import { Link } from 'react-router-dom';

// import motion
import { motion } from 'framer-motion';

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
    <nav className='text-primary xl:hidden'>
      {/* nav open button */}
      <button
        onClick={() => setOpenMenu(true)}
        className='text-3xl cursor-pointer'
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
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        ref={menuRef}
      >
        {/* icon */}
        <button
          onClick={() => setOpenMenu(false)}
          className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'
          aria-label="Close menu"
        >
          <IoMdClose />
        </button>

        {/* menu list */}
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
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
