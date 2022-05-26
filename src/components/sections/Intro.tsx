import React from 'react'
import styled from 'styled-components'

import Battery from '../Battery'

const Container = styled.header`
  height: 100vh;
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderText = styled.h1`
  color: ${props => props.theme.colors.light};
  text-align: center;
  max-width: 800px;
  font-size: 75px;
  line-height: 100px;
`

function Intro() {
  return (
    <Container>
      <HeaderText>
        Web Developer powered by <Battery>passion</Battery>
      </HeaderText>
    </Container>
  )
}

export default Intro
