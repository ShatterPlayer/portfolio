import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import SectionWrapper from '../SectionWrapper'
import Headline from '../Headline'
import Button from '../Button'

import linkedinImage from '../../images/linkedin.png'
import githubImage from '../../images/github.png'

import { viewport, opacityVariants } from '../../whileInViewSettings'

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`

const TextParagraph = styled(motion.p)`
  font-size: 35px;
`

const SocialsContainer = styled(motion.div)`
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin: 0 auto;
`

const Image = styled.img`
  width: 70px;
  height: 70px;
  margin: 20px;
`

function Contact() {
  return (
    <SectionWrapper
      backgroundColor="dark"
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ staggerChildren: 0.1 }}
    >
      <Headline as={motion.h2} variants={opacityVariants}>
        Contact
      </Headline>
      <TextWrapper>
        <TextParagraph variants={opacityVariants}>Any questions?</TextParagraph>
        <TextParagraph variants={opacityVariants}>
          Feel free to send me an e-mail!
        </TextParagraph>
        <motion.span variants={opacityVariants}>
          <Button color="dark" linkTo="mailto:michalk101010@gmail.com">
            Reach me out
          </Button>
        </motion.span>
      </TextWrapper>
      <SocialsContainer variants={opacityVariants}>
        <a href="https://www.linkedin.com/in/shatterplayer/" target="_blank">
          <Image src={linkedinImage} alt="linkedin" />
        </a>
        <a href="https://github.com/ShatterPlayer" target="_blank">
          <Image src={githubImage} alt="github" />
        </a>
      </SocialsContainer>
    </SectionWrapper>
  )
}

export default Contact
