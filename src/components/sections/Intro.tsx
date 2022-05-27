import React from 'react'
import styled from 'styled-components'

import Battery from '../Battery'
import Headline from '../Headline'

const Container = styled.header`
  height: 100vh;
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderText = styled(Headline)`
  max-width: 800px;
  line-height: 100px;
  font-size: 75px;
`

function Intro() {
  return (
    <Container>
      <HeaderText as="h1">
        Web Developer powered by <Battery>passion</Battery>
      </HeaderText>
    </Container>
  )
}

export default Intro
