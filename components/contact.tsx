"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-button';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section ref={ref} id="contact" className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>Kontaktiert Mich</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>Bitte kontaktieren Sie mich direkt unter{" "}
        <a className='underline' href='mailto:deu.av.yunusemre@gmail.com'>
          deu.av.yunusemre@gmail.com</a>
        {" "}
        oder über dieses Formular
      </p>

      <form className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}>
        <input className='h-14 px-4 rounded-lg borderBlack 
        dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          type="email" placeholder='Ihr E-Mail'
          required
          maxLength={500}
          name='senderEmail' />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4 
         dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          placeholder='Ihre Nachricht'
          required
          maxLength={5000}
          name='message'></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
