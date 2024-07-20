import React, { useContext } from 'react';

// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

// import Router
import { BrowserRouter as Router } from 'react-router-dom';

// import motion
import { motion } from 'framer-motion';

// import cursor context
import { CursorContext } from './context/CursorContext';

const App = () => {

  const { cursorPos, cursorBg } = useContext(CursorContext);
  
  // Cursor variants
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: '#0e1112',
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
    },
  };

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBg}
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      >
      </motion.div>
    </>
  );
};

export default App;
