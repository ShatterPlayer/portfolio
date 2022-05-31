import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import ContentContainer from './ContentContainer'
import Headline from './Headline'

import avatarImage from '../images/avatar.png'

const Wrapper = styled.div`
  overflow-x: hidden;
`

const Container = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContentPart = styled(motion.div)`
  width: 564px;
  margin: 20px;
`

const EntrySentence = styled(Headline)`
  font-size: 50px;
`

const Description = styled.p`
  font-size: 20px;
  text-align: center;
`

const Image = styled(motion.img)`
  margin: 20px;
`

function Summary() {
  const { ref, inView } = useInView({ threshold: 0.8 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  })

  return (
    <Wrapper>
      <Container ref={ref}>
        <ContentPart
          variants={{
            hidden: {
              x: -1000,
            },
            visible: {
              x: 0,
              transition: {
                type: 'spring',
                duration: 0.5,
              },
            },
          }}
          initial="hidden"
          animate={controls}
        >
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
          variants={{
            hidden: {
              x: 1000,
            },
            visible: {
              x: 0,
              transition: {
                type: 'spring',
                duration: 0.5,
                delay: 0.5,
              },
            },
          }}
          initial="hidden"
          animate={controls}
          src={avatarImage}
          alt="avatar"
        />
      </Container>
    </Wrapper>
  )
}

export default Summary
