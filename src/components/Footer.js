import React from 'react';
import Socials from './Socials';


const Footer = () => {
    return (
        <footer className='flex flex-col justify-center items-center py-[30px] text-[#9fa6b2]'>
            
            <div className='py-[15px]'>
                {/* socials */}
                <Socials />
            </div>
            
            <div>
                <h1 className='text-[#696c6d] text-[1em]'>© 2021 All rights reserved</h1>
            </div>

        </footer>
    );
};

export default Footer;
