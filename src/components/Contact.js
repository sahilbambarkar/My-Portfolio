import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import GmailCopy from './GmailCopy';

function Contact() {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_8jt7o5d', 'template_kdtyrag', {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      message: e.target.message.value,
      to_email: 'sahilbambarkar007@gmail.com' // Set the recipient's email address
    }, 'vJX_4Gj5yD05jWvCS')
      .then((result) => {
        console.log(result.text);
        console.log("Message Sent");
        setShowSuccessMessage(true); // Show success message

        // Reset the form after a short delay
        setTimeout(() => {
          e.target.reset();
          setShowSuccessMessage(false); // Hide the success message
        }, 2000); // Change the delay (in milliseconds) as needed
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact' className='flex-col sm:px-[1.25rem] mt-10 flex tm:py-0 sm:py-0 sm:mt-14 tm:flex-col gap-[80px] sm:gap-[20px] tm:gap-[20px] sm:flex-col'>
      <div className='flex flex-col pl-[5rem] w-[36rem] tm:pt-4 lg:pt-4 sm:pt-0 tm:w-full sm:w-full tm:mb-[20px] sm:mb-[20px]'>
        <h1 className='tracking-wider font-[600] text-[1.4rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem] sm:w-[100%]'>
          Contact Me
        </h1>
        <p className='cursor-pointer'>You can contact me at<GmailCopy /></p>
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
            <input className='p-4 rounded-[4px] bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]'
              placeholder='Name'
              type="text"
              name="user_name"
              required />

            <label>Email</label>
            <input className='p-4 rounded-[4px] bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]'
              placeholder='Email'
              type="email"
              name="user_email"
              required />

            <label>Your Message</label>
            <textarea
              className='p-4 resize-none rounded-[4px] input bg-[#e4e1e1fa] dark:bg-[#343541] h-[198px]'
              placeholder='Your message'
              type='text'
              name="message"
              required />

            <div className='flex justify-start mt-5 mb-8'>
              <button type='submit'
                className='px-[1.6em] py-[.8em] bg-[#ec6e59] cursor-pointer rounded-[4px] flex justify-start items-center gap-1 border-[#ec6e59] border-2 lg:text-[.8rem] sm:text-[.8rem]'>Send</button>
            </div>
          </form>
        )}
      </div>

      <div className='flex justify-center items-center font-[350] text-[0.6rem] leading-loose sm:text-[1rem] tm:text-[1rem]'> Copyright © 2024
        <span className='font-[500]'>&nbsp;Sahil Bambarkar&nbsp; </span>
        All Rights Reserved
      </div>
    </div>
  );
}

export default Contact;