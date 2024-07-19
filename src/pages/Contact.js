import React from 'react';

// import images
import WomanImg from '../img/contact/woman.png';

const Contact = () => {
  return <section className='section'>
    <div className='container mx-auto h-full'>

      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left '>

        {/* bg */}
        <div></div>
      
        {/* text & form*/}
        <div className='lg:flex lg:pt-32 px-4'>
          <h1 className='h1'>Contact</h1>
          <p className='mb-12'>I would love to get suggestions from you.</p>

          {/* form */}
          <form className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
              <input type='text' placeholder='Your name' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' />
              <input type='email' placeholder='Your email address' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' />
              <input type='text' placeholder='Your message' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send it</button>
            </div>
          </form>
        </div>

        {/* image */}
        <div className='lg:flex-1'>
          <img src={WomanImg} alt='' />
        </div>

      </div>

    </div>
  </section>;
};

export default Contact;
