import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

import Headline from './Headline'

const TechHeadline = styled(Headline)`
  font-size: 50px;
`

const TechStackGrid = styled(motion.div)`
  padding: 30px;
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  text-align: center;
  grid-gap: 45px 20px;
  margin-top: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 26px;
  width: 700px;
  white-space: nowrap;
`

const RecentTechSelection = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: -20px;
  width: 100%;
`

const lineVariants: Variants = {
  hidden: {
    pathLength: 0,
    visibility: 'hidden',
  },
  visible: {
    pathLength: 1,
    visibility: 'visible',
    transition: {
      type: 'spring',
      duration: 5,
    },
  },
}

const techVariants: Variants = {
  hidden: {
    scale: 0,
  },

  visible: {
    scale: 1,
  },
}

function TechStack() {
  return (
    <>
      <TechHeadline>Technologies I was recently up to</TechHeadline>
      <TechStackGrid
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.div variants={techVariants}>React</motion.div>
        <motion.div variants={techVariants}>Framer Motion</motion.div>
        <motion.div variants={techVariants}>TypeScript</motion.div>
        <motion.div variants={techVariants}>webpack</motion.div>
        <motion.div variants={techVariants}>Service Workers</motion.div>
        <motion.div variants={techVariants}>ExpressJS</motion.div>
        <motion.div variants={techVariants}>Jest</motion.div>
        <motion.div variants={techVariants}>Redux</motion.div>
        <motion.div variants={techVariants}>Gatsby</motion.div>
        <RecentTechSelection
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 318.3 120.9"
          fill="none"
        >
          <motion.path
            d="M63 198c-20-19-47-72 0-135 59-79 954-67 1027-33 73 35 67 129-230 112-133-7-61 76-165 82-198 12-599 21-629-24 0 0-35 43-63 158"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="matrix(.26458 0 0 .26458 19 0)"
            variants={lineVariants}
          />
          <motion.path
            d="m10 26-1-1v-2H8a26 26 0 0 0-2 3 58 58 0 0 1-1 1l-1 1-1-1H2l-1-1v-1a28 28 0 0 1 0-3 27 27 0 0 1 4-8l2-2h1a4 4 0 0 1 2 1 27 27 0 0 0-5 7v1a56 56 0 0 0-1 4v1l2-1a50 50 0 0 0 6-11l1-1h2a3 3 0 0 1 1 1l-1 3a63 63 0 0 0-2 5 8 8 0 0 0-1 4 10 10 0 0 0 1 1v1l-1-1h-1a10 10 0 0 1-1-1zm18-12v2l-1 1v1h-1v-1a11 11 0 0 0 0-1v-1l-2 1a13 13 0 0 0-1 5 25 25 0 0 1 2 0v1a20 20 0 0 0-2 0v2l-1 4c-1 2-3 2-5 2l-1-1h-1l-1-1 1-2 1-2 2-2h3v-2a25 25 0 0 0-1-3v-3a6 6 0 0 1 4-3h1a10 10 0 0 1 2 2l1 1zM17 29l2-1a7 7 0 0 0 2-5l-1 1-2 1-1 1v3zm22-15v3l-2 3-3 2-3 1v3h1v1l2-1 2-1 1-1 1-1h1l-3 4-4 1-3-1-1-4v-2a14 14 0 0 1 4-7l3-2h2l2 2zm-2 1-2 1-1 1a13 13 0 0 0-3 5l4-3c2-1 2-3 2-4zm11-3h1l2 1a24 24 0 0 0-1-4l-1-3-2-3V2l1-1h1l1-1 1 3a22 22 0 0 1 3 14 20 20 0 0 1-3 6l-2 3-2 2-2 1-4-2-1-3 1-2a19 19 0 0 1 3-7l2-2 2-1zm-3 15 2-1 2-3a20 20 0 0 0 2-8v-1l-2 1a17 17 0 0 0-3 4 27 27 0 0 0-2 5l-1 2 2 1zm19-12v-2a253 253 0 0 1 3 0 32 32 0 0 1 3-5l1-1 1 1h1l1 1a35 35 0 0 0-3 4 26 26 0 0 0 3 0v1l-4 1a40 40 0 0 0-3 8v2l1 2h2l1-1v1l-1 1h-4l-1-1-1-1-1-1v-2a31 31 0 0 1 2-5l1-3zm13 13-3-1-1-4 1-3 1-2a15 15 0 0 1 4-5l3-1 2 2h1l1 3a11 11 0 0 1-2 7 11 11 0 0 1-7 4zm2-10a15 15 0 0 0-2 5l-1 2 1 1v1l3-1 2-3 1-3a12 12 0 0 0 1-4l-1-1-2 1-2 2zm35-1-1 1-2 1a58 58 0 0 0-5 7l-1 2-2-1v-1a20 20 0 0 1 2-7l2-3-2 1-1 2a34 34 0 0 0-4 4 74 74 0 0 0-3 5l-1-2-1-1a16 16 0 0 1 1-4l2-5 2-4h2l1 2-1 2a310 310 0 0 0-1 4 56 56 0 0 1 5-5l2-2 1 1a5 5 0 0 1 1 0l1 1-1 1a147 147 0 0 1-3 7 121 121 0 0 1 8-9l2-1 1 1 1 1-1 2a133 133 0 0 0-3 8v1h2v1l-2 1h-2l-1-1-1-1v-1l1-2a18 18 0 0 1 1-4l1-2zm17-3h1l1 1a44 44 0 0 0-2 8l-1 2 1 1v1h-1l-1 1c-1 0-2-1-2-3l2-5a20 20 0 0 1-4 5l-1 2-2 1-2-1-1-3 1-4 2-4 3-2 2-2 1 1h1l1 1v1l-3 1a13 13 0 0 0-4 6l-1 3 1 1 2-2a32 32 0 0 0 4-7 54 54 0 0 0 2-3zm4 10 1-3a55 55 0 0 1 3-10 93 93 0 0 1 5-8l2-3 1 1 1 1 1 1v1l-3 3a36 36 0 0 0-5 8l-2 5a29 29 0 0 1 4-6l2-1 2-1 2 3-1 2a8 8 0 0 1-2 3l-2 1a21 21 0 0 0 2 5l2 2 2 1-1 1h-1l-1 1h-1l-1-1-2-2a30 30 0 0 1-1-7 13 13 0 0 0 2-3l3-4v-1l-2 1-2 2a28 28 0 0 0-4 7 21 21 0 0 0-1 3v2h-2a14 14 0 0 0 0-1l-1-1v-2zm27-10-1 3-1 3-3 2-3 1-1 1 1 1v1l1 1 2-1 1-1 2-1 1-1-3 4-3 1-4-1-1-4 1-2a14 14 0 0 1 4-7l2-2h2l3 2zm-2 1-2 1-2 1a13 13 0 0 0-2 5l4-3 2-4zM3 61v-2a252 252 0 0 1 3 0 32 32 0 0 1 3-5v-1l1 1h2l1 1a35 35 0 0 0-3 4 26 26 0 0 0 2 0l1 1-4 1a40 40 0 0 0-3 8l-1 2 1 2h2l2-1-1 1-1 1H5l-2-1-1-1v-3a31 31 0 0 1 2-5l1-3Zm9 11 1-2a36 36 0 0 1 1-7 67 67 0 0 1 5-11 51 51 0 0 1 4-6l1 1h2l1 1a54 54 0 0 0-7 10 209 209 0 0 0-4 8c4-5 8-8 10-8l1 1 2 1-2 3a44 44 0 0 0-3 6l-1 2 1 1v-1h1v1h-1a12 12 0 0 1-2 1h-1l-1-1v-2a31 31 0 0 1 2-5 96 96 0 0 1 2-3h-2l-2 3a34 34 0 0 0-6 9l-1 1v-1a23 23 0 0 1-1-2zm17-1a9 9 0 0 1 0-2 138 138 0 0 1 2-7l1-1 1-1h1l2 2a12 12 0 0 0-2 3 37 37 0 0 0-2 4 24 24 0 0 0-1 4v1-1h-1l-1-1v-1zm6-14v-2a33 33 0 0 1 1-4h1l1 1a6 6 0 0 1 2 1 27 27 0 0 0-4 5h-1v-1zm12 3v3l-1 1-1-1a11 11 0 0 0 1-1v-1h-1l-2 1a13 13 0 0 0-1 5 25 25 0 0 1 3 0v1a20 20 0 0 0-2 0v1h-1l1 1-2 4c-1 2-2 2-4 2h-1l-1-1h-1v-3l2-2 2-2h3l-1-2a25 25 0 0 0 0-3v-3a6 6 0 0 1 4-3h1a10 10 0 0 1 2 2v1zM37 75l1-1a7 7 0 0 0 3-5l-2 1-1 1-1 1-1 2 1 1zm16 9-1-1v-5a43 43 0 0 1 3-9 554 554 0 0 1 6-14l2 1 2 1-2 1a20 20 0 0 0-2 4v2l1-1 1-2 2-2h4l1 2a14 14 0 0 1-3 9l-1 1-2 1-1 1h-3v-1l2-2 2-3a23 23 0 0 0 3-7l-2 1-2 2a124 124 0 0 0-4 6 45 45 0 0 0-3 7 270 270 0 0 0-3 8zm22-10-3-1-1-4v-3l1-2a15 15 0 0 1 4-5l3-1 2 2h1c1 0 2 1 2 3a11 11 0 0 1-3 7 11 11 0 0 1-6 4zm1-10a15 15 0 0 0-2 5v3l1 1 2-1 2-3 2-3a12 12 0 0 0 0-4v-1l-3 1-2 2zm8 8a33 33 0 0 1 2-5 109 109 0 0 1 4-9h1a7 7 0 0 1 1 1h1l-2 3-1 3a45 45 0 0 0 6-6h2l-1 3 1 2-1 1-1 1a5 5 0 0 1-2-3l-3 2-2 2-1 3-1 4h-1a6 6 0 0 1-1-1l-1-1zm16-11v-2a250 250 0 0 1 3 0 32 32 0 0 1 3-5v-1l1 1h2l1 1a35 35 0 0 0-3 4 26 26 0 0 0 2 0l1 1-4 1a40 40 0 0 0-3 8l-1 2 1 2h2l2-1-1 1-1 1h-3l-2-1-1-1v-3a31 31 0 0 1 2-5l1-3zm11 21-1-1-1-1a99 99 0 0 1 5-19 34 34 0 0 0-3 0l-1-1h2l2-1a28 28 0 0 1 4-7l2-2a5 5 0 0 1 4-1h1l1-1 1 1-1 1v2l-2 3v-1l-1-2a4 4 0 0 1 0-1v-1l-1 1-1 1a29 29 0 0 0-3 7h3v2h-3a504 504 0 0 0-7 21zm13-8-3-1-1-4v-3l1-2a15 15 0 0 1 4-5l3-1 2 2h1c1 0 2 1 2 3a11 11 0 0 1-3 7 11 11 0 0 1-6 4zm2-10a15 15 0 0 0-3 5v3l1 1 2-1 3-3 1-3a12 12 0 0 0 0-4v-1l-3 1-1 2zm8 7 1-4a72 72 0 0 1 9-21l1 1a11 11 0 0 1 3 1 39 39 0 0 0-8 15 63 63 0 0 0-3 11v1h-1l-1-1-1-1v-2zm8 0a10 10 0 0 1 0-2 133 133 0 0 1 2-7l1-1 1-1h1l2 2a12 12 0 0 0-2 3 38 38 0 0 0-2 6 7 7 0 0 0-1 2v1-1h-1l-1-1v-1zm6-14v-2a34 34 0 0 1 1-4h1l1 1a6 6 0 0 1 2 1 27 27 0 0 0-4 5h-1v-1zm5 17-3-1-1-4 1-3 1-2a15 15 0 0 1 3-5l4-1 2 2c1 0 2 1 2 3a11 11 0 0 1-3 7 11 11 0 0 1-6 4zm2-10a15 15 0 0 0-3 5v3l1 1 3-1 2-3 1-3a12 12 0 0 0 1-4l-1-1-2 1-2 2z"
            fill="#fff"
            transform="matrix(.26458 0 0 .26458 0 99)"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 3.5,
                },
              },
            }}
          />
        </RecentTechSelection>
      </TechStackGrid>
    </>
  )
}

export default TechStack
