import React, { useContext } from 'react';
import Image1 from '../assets/images/portfolio/1.png';
import Image2 from '../assets/images/portfolio/2.png';
import Image3 from '../assets/images/portfolio/3.png';
import Image4 from '../assets/images/portfolio/4.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return <motion.section 
    initial={{ opacity: 0, y: '100%' }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='section'
  >
    <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>

            {/* text */}
            <motion.div 
              initial={{ opacity: 0, y: '-80%' }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: '-80%' }}
              transition={transition1}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className='flex flex-col lg:items-start'
            >
                <h1 className='h1'>Portfolio</h1>
                <p className='mb-12 max-w-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br/>
                <br/>
                  Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                </p>                
                <Link to='/contact' className='btn mb-[30px] mx-auto lg:mx-0'>Hire me</Link>
            </motion.div>

            {/* image grid */}
            <div 
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler} 
              className='grid grid-cols-2 lg:gap-2'
            >

              {/* images */}
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img src={Image1} alt='portfolio' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' />
              </div>
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img src={Image2} alt='portfolio' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' />
              </div>
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img src={Image3} alt='portfolio' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' />
              </div>
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img src={Image4} alt='portfolio' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' />
              </div>

            </div>

        </div>

    </div>
  </motion.section>;
};

export default Portfolio;
