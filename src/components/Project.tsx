import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

import Button from './Button'
import Headline from './Headline'

import {
  movementVariants,
  opacityVariants,
  viewport,
} from '../whileInViewSettings'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  width: 100%;
  overflow-x: hidden;
`

const StyledHeadline = styled(Headline)`
  font-size: 40px;
`

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 770px;
  max-width: 100%;
  margin: 20px 0;

  @media (max-width: 770px) {
    flex-direction: column-reverse;
  }
`

const ButtonsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  max-width: 100%;
  flex-wrap: wrap;
`

const Image = styled(motion.img)`
  width: 50%;
  min-width: 300px;
  margin: 20px;
`

const ListHeader = styled.h3`
  font-size: 30px;

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`

const List = styled.ul`
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
`

interface Props {
  name: string
  description: string
  technologies: string[]
  image: string
  githubProjectName: string
  website: string
}

function Project({
  name,
  description,
  technologies,
  image,
  githubProjectName,
  website,
}: Props) {
  return (
    <Container
      as={motion.article}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <StyledHeadline as={motion.h2} variants={opacityVariants}>
        {name}
      </StyledHeadline>
      <motion.p variants={opacityVariants}>{description}</motion.p>
      <SubContainer>
        <motion.div variants={movementVariants} custom={-1000}>
          <ListHeader>Development stack</ListHeader>
          <List>
            {technologies.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </List>
        </motion.div>
        <Image
          variants={movementVariants}
          custom={1000}
          src={image}
          alt={name}
        />
      </SubContainer>
      <ButtonsContainer variants={opacityVariants}>
        <Button
          color="blue"
          linkTo={'https:github.com/ShatterPlayer/' + githubProjectName}
        >
          Source code
        </Button>
        <Button color="blue" linkTo={website}>
          Check out
        </Button>
      </ButtonsContainer>
    </Container>
  )
}

export default Project
