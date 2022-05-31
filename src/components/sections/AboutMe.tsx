import React, { useEffect } from 'react'
import styled from 'styled-components'

import Headline from '../Headline'
import TechStack from '../TechStack'
import Summary from '../Summary'

const Container = styled.section`
  background-color: ${props => props.theme.colors.green};
  padding: 70px 0;
  min-height: 100vh;
  position: relative;
`

function AboutMe() {
  return (
    <>
      <Container>
        <Headline>About Me</Headline>
        <Summary />
      </Container>
      <Container>
        <TechStack />
      </Container>
    </>
  )
}

export default AboutMe
