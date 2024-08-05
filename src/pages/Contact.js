import React, { useState, useContext } from 'react';
import WomanImg from '../assets/images/contact/woman.png';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  // Handle form submission
  const handleSubmit = (e) => {

    e.preventDefault();

    // Process formData (e.g., send to server)
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>

          {/* bg */}
          <motion.div 
            initial={{ opacity: 0, y: '100%' }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex lg:bg-[#eef7f9] lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:top-72 lg:z-0'
          ></motion.div>
        
          {/* text & form*/}
          <div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler} 
            className='lg:flex-1 lg:pt-32 px-4 z-10'
          >
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>

            {/* form */}
            <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
              <div className='flex gap-x-10'>
                <input 
                  type='text' 
                  name='name' 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder='Your name' 
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' 
                />
                <input 
                  type='email' 
                  name='email' 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder='Your email address' 
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' 
                />
              </div>
              <input 
                type='text' 
                name='message' 
                value={formData.message} 
                onChange={handleChange} 
                placeholder='Your message' 
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' 
              />
              <button 
                type='submit' 
                className='btn mb-[30px] mx-auto mt-10 lg:mx-0 self-start'
              >
                Send it
              </button>
            </form>
          </div>

          {/* image */}
          <motion.div 
            initial={{ opacity: 0, y: '100%' }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1'
          >
            <img src={WomanImg} alt='woman' title='woman' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
