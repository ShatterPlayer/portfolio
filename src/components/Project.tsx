import React from 'react'
import styled from 'styled-components'

import ContentContainer from './ContentContainer'
import Button from './Button'

import quiseImage from '../images/quise.png'

import Headline from './Headline'

const Container = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
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

const Image = styled.img`
  width: 500px;
  margin-left: 100px;
`

const ListHeader = styled.h3`
  font-size: 30px;
`

const List = styled.ul`
  font-size: 20px;
`

function Project() {
  return (
    <Container as="article">
      <StyledHeadline>Quise</StyledHeadline>
      <p>Quiz app</p>
      <p>
        Status: <Green>Online</Green>
      </p>
      <SubContainer>
        <div>
          <ListHeader>Development stack</ListHeader>
          <List>
            <li>React</li>
            <li>Redux</li>
            <li>Framer Motion</li>
            <li>MongoDB (Atlas)</li>
            <li>ExpressJS</li>
            <li>JWT</li>
            <li>styled-components</li>
          </List>
        </div>
        <Image src={quiseImage} alt="quise" />
      </SubContainer>
      <SubContainer>
        <Button linkTo="https:github.com/ShatterPlayer/quise-frontend">
          Source code
        </Button>
        <Button linkTo="https://quise.netlify.app">Check out</Button>
      </SubContainer>
    </Container>
  )
}

export default Project
