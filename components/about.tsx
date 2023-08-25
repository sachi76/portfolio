"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';


export default function About() {

  const { ref  } = useSectionInView("About", 0.75)

  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center !leading-8 sm:mb-40 scroll-mt-28'
     initial={{ opacity:0, y: 100 }}
     animate={{ opacity:1, y: 0 }}
     transition={{ delay: 0.175 }}
     id='about'
    
    >
     <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        After working for nearly 2 years after my degree in{" "}
        <span className="font-bold">Engineering</span> (non-tech role), I decided to pursue my
        passion for programming. I started learning coding on online study materials like <span className='italic font-medium '>Youtube, Scrimba, FreeCodeCamp and various other platforms</span> and learned{" "}
        <span className="font-bold">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is
        wiring things together. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with <span className='italic'> TypeScript and Prisma.</span> I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>


      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        outdoor games, editing videos and helping my Mother. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. Currently I am pursuing 1 year advance Software Engineering course on <span className="underline font-bold">Scaler</span>.
      </p>
    </motion.section>
  )
}
