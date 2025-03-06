import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import GmailCopy from './GmailCopy';

function Contact() {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

   const currentYear = new Date().getFullYear();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_giin8lt', // Your EmailJS service ID
      'template_iaq8vse', // Your EmailJS template ID
      {
        user_name: e.target.user_name.value,
        user_email: e.target.user_email.value,
        message: e.target.message.value,
        to_email: 'sahilbambarkar007@gmail.com' // Set the recipient's email address
      },
      'bL6mQX1bfvBTVMYVV' // Your EmailJS user ID
    )
      .then((result) => {
        console.log(result.text);
        console.log("Message Sent");
        setShowSuccessMessage(true); 
        setErrorMessage(''); 

        
        setTimeout(() => {
          e.target.reset();
          setShowSuccessMessage(false); 
        }, 2000); 
      }, (error) => {
        console.log(error.text);
        setErrorMessage('Failed to send message. Please try again.'); 
      });
  };

  return (
    <div id='contact' className='flex-col sm:px-[1.25rem] mt-10 flex tm:py-0 sm:py-0 sm:mt-14 tm:flex-col gap-[80px] sm:gap-[20px] tm:gap-[20px] sm:flex-col'>
      <div className='flex flex-col pl-[5rem] w-[36rem] tm:pt-4 lg:pt-4 sm:pt-0 tm:w-full sm:w-full tm:mb-[20px] sm:mb-[20px]'>
        <h1 className='tracking-wider font-[600] text-[1.4rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem] sm:w-[100%]'>
          Contact Me
        </h1>
        <p className='cursor-pointer'>You can contact me at <GmailCopy /></p>
      </div>
      <div className='flex justify-center'>
        {showSuccessMessage ? (
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-lg mb-4'>Thank you for your message!</h2>
            <p>Your message has been sent to my email.</p>
          </div>
        ) : (
          <form className='flex flex-col gap-4 tm:w-full sm:w-full lg:w-[88%]' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input className='p-4 rounded-[4px] bg-[#e4e1e1fa] bg-gray-700 h-[58px]'
              placeholder='Name'
              type="text"
              name="user_name"
              required />

            <label>Email</label>
            <input className='p-4 rounded-[4px] bg-[#e4e1e1fa] bg-gray-700 h-[58px]'
              placeholder='Email'
              type="email"
              name="user_email"
              required />

            <label>Your Message</label>
            <textarea
              className='p-4 resize-none rounded-[4px] input bg-[#e4e1e1fa] bg-gray-700 h-[198px]'
              placeholder='Your message'
              name="message"
              required />

            <div className='flex justify-start mt-5 mb-8'>
              <button type='submit'
                className='px-[1.6em] py-[.8em] bg-[#ec6e59] cursor-pointer rounded-[4px] flex justify-start items-center gap-1 border-[#ec6e59] border-2 lg:text-[.8rem] sm:text-[.8rem] transition-scale hover:scale-105 font-extrabold'>Send</button>
            </div>

            {errorMessage && (
              <div className='text-red-500'>{errorMessage}</div> 
            )}
          </form>
        )}
      </div>

      <div className='flex justify-center items-center font-[350] text-[0.6rem] leading-loose sm:text-[1rem] tm:text-[1rem]'>
        Copyright &copy; {currentYear}
        <span className='font-[500]'>&nbsp;Sahil Bambarkar&nbsp; </span>
        All Rights Reserved
      </div>
    </div>
  );
}

export default Contact;
