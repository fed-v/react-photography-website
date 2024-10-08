import React, { useContext } from 'react';
import WomanImg from '../assets/images/about/woman.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const About = () => {

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return <motion.section 
    initial={{ opacity: 0, y: '100%' }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1} 
    className='section'
  >
    <div className='container mx-auto h-full relative'>

      {/* text and image wrapper */}
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-36'>

        {/* image */}
        <div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler} 
          className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'
        >
          <div className='relative lg:-right-40 overflow-hidden'>
            <img src={WomanImg} alt="woman" title="woman" />
          </div>
        </div>

        {/* text */}
        <motion.div 
          initial={{ opacity: 0, y: '-80%' }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: '-80%' }}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
        >
          <h1 className='h1'>About me</h1>
          <p className='mb-12 max-w-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br/>
          <br/>
            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure 
          </p>
          <Link to='/portfolio' className='btn'>View my work</Link>
        </motion.div>
          
      </div>

    </div>
  </motion.section>;
};

export default About;
