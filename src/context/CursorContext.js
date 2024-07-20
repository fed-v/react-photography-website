import { useState, useEffect, createContext } from 'react';

// create context
export const CursorContext = createContext();

// Create context provider
const CursorProvider = ({ children }) => {

  // Cursor pointer state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Cursor bg state
  const [cursorBg, setCursorBg] = useState('default');

  const mobileViewportIsActive = window.innerWidth <= 768;

  useEffect(() => {

    if (!mobileViewportIsActive) {
    
      const move = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', move);

      // remove event
      return () => {
        window.removeEventListener('mousemove', move);
      };

    } else {
      setCursorBg('none');
    }

  }, [mobileViewportIsActive]); // Added an empty dependency array to ensure useEffect runs once


  // mouse enter handler
  const mouseEnterHandler = () => {
    setCursorBg('text');
  };

  // mouse leave handler
  const mouseLeaveHandler = () => {
    setCursorBg('default');
  };

  return (
    <CursorContext.Provider value={{ cursorPos, cursorBg, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
