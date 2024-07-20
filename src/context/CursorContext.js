import { useState, useEffect, createContext } from 'react';

// create context
export const CursorContext = createContext();

// Create context provider
const CursorProvider = ({ children }) => {
  // Cursor pointer state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);

    // remove event
    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []); // Added an empty dependency array to ensure useEffect runs once

  return (
    <CursorContext.Provider value={cursorPos}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
