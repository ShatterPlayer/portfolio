import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

import ContentContainer from './ContentContainer'
import Button from './Button'
import Headline from './Headline'

import {
  movementVariants,
  opacityVariants,
  viewport,
} from '../whileInViewSettings'

const Container = styled(ContentContainer)`
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

const Green = styled.span`
  color: ${({ theme }) => theme.colors.green};
`

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`

const Image = styled(motion.img)`
  width: 500px;
  margin-left: 100px;
`

const ListHeader = styled.h3`
  font-size: 30px;
`

const List = styled.ul`
  font-size: 20px;
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
      <motion.p variants={opacityVariants}>
        Status: <Green>Online</Green>
      </motion.p>
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
      <SubContainer as={motion.div} variants={opacityVariants}>
        <Button linkTo={'https:github.com/ShatterPlayer/' + githubProjectName}>
          Source code
        </Button>
        <Button linkTo={website}>Check out</Button>
      </SubContainer>
    </Container>
  )
}

export default Project
