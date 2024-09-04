import React from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl '>Get in Touch</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity:0, x:-100}}
            transition={{ duration: 1}}
            className='my-4'>Kishan Bagh, Hyderabad, Telangana, 500064</motion.p>
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity:0, x:-100}}
            transition={{ duration: 1}}
            className='my-4'>+91 6301020630</motion.p>
            <motion.a 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity:0, x:-100}}
            transition={{ duration: 1}}
            href='#' className='border-b'>hydghani@gmail.com</motion.a>
            
        </div>
        </div>
  )
}

export default Contact