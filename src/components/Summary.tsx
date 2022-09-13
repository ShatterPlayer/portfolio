import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Headline from './Headline'

import { movementVariants } from '../whileInViewSettings'

const widthBreakpoint = 770

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  @media (max-width: ${widthBreakpoint}px) {
    flex-direction: column-reverse;
  }
`

const ContentPart = styled(motion.div)`
  margin: 20px;
  width: 65%;

  @media (max-width: ${widthBreakpoint}px) {
    margin: 0;
    width: 100%;
  }
`

const EntrySentence = styled(Headline)`
  font-size: 40px;
  @media (max-width: ${widthBreakpoint}px) {
    font-size: 30px;
  }
`

const Description = styled.p`
  font-size: 20px;
  text-align: center;
  text-align: justify;
`

const Image = styled(motion.img)`
  margin: 20px;
  width: 35%;
  min-width: 300px;
`

function Summary() {
  return (
    <Wrapper>
      <Container
        as={motion.div}
        transition={{
          staggerChildren: 0.5,
          staggerDirection: window.innerWidth > widthBreakpoint ? 1 : -1,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
      >
        <ContentPart variants={movementVariants} custom={-1000}>
          <EntrySentence>Hello, I'm Michał</EntrySentence>
          <Description>
            Open source enthusiast from Poland. Since 2018 I’ve been expanding
            my knowledge of web technologies. Among plenty of small projects, I
            managed to acomplish several larger, which are listed in the section
            below. Besides programming, my interests also include mathematics
            and electronic music.
          </Description>
        </ContentPart>
        <Image
          variants={movementVariants}
          custom={1000}
          src="https://avatars.githubusercontent.com/u/40521610"
          alt="avatar"
        />
      </Container>
    </Wrapper>
  )
}

export default Summary
