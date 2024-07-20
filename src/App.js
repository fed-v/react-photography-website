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
  const cursorPos = useContext(CursorContext);

  // Cursor variants
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: '#0e1112',
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
        animate='default'
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50"
      >
      </motion.div>
    </>
  );
};

export default App;
