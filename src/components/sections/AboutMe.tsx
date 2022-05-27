import React from 'react'
import styled from 'styled-components'

import ContentContainer from '../ContentContainer'
import Headline from '../Headline'

import avatarImage from '../../images/avatar.png'

const Container = styled.section`
  background-color: ${props => props.theme.colors.green};
  padding: 70px 0;
`

const ContentContainerFlex = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContentPart = styled.div`
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

const Image = styled.img`
  margin: 20px;
`

function AboutMe() {
  return (
    <Container>
      <Headline>About Me</Headline>
      <ContentContainerFlex>
        <ContentPart>
          <EntrySentence>Hello, I'm Michał</EntrySentence>
          <Description>
            Open source enthusiast from Poland. Since 2018 I’ve been expanding
            my knowledge of web technologies. Among plenty of small projects, I
            managed to acomplish several larger, which are listed in the section
            below. Besides programming, my interests also include mathematics
            and electronic music.
          </Description>
        </ContentPart>
        <Image src={avatarImage} alt="avatar" />
      </ContentContainerFlex>
    </Container>
  )
}

export default AboutMe
