import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
       <section className='py-10' style={{
        background: `url(${appointment})`
    }}>
        <h2 className='text-center text-primary text-2xl'>Contact Us</h2>
        <h2 className='text-center text-white text-2xl  lg:text-4xl '>Stay Connected With US</h2>
       <div className='text-center pt-5'>
       <input size="50" className='rounded-lg pl-5 w-56 lg:w-96 md:w-56 ' style={{height:"40px"}}type="email" name="" id="" placeholder='Email' required /><br></br>
       <input size="50" className='rounded-lg mt-5 pl-5 w-56 lg:w-96 md:w-56' style={{height:"40px"}}type="email" name="" id="" placeholder='Subject' required /><br/>
       <textarea className='rounded-lg mt-5 mb-5  pl-5 w-56 lg:w-96 md:w-5' name="" id="" cols="52" rows="5" placeholder='Your Message'></textarea><br/>
       <PrimaryButton >Get Started</PrimaryButton>
       </div>
       </section>
    );
};

export default Contact;