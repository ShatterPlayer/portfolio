import React from 'react'
import styled from 'styled-components'

import Battery from '../Battery'
import Headline from '../Headline'
import SectionWrapper from '../SectionWrapper'

const HeaderText = styled(Headline)`
  max-width: 800px;
  line-height: 100px;
  font-size: 75px;

  @media (max-width: 770px) {
    font-size: 50px;
    line-height: 80px;
  }
`

function Intro() {
  return (
    <SectionWrapper bgcolor="dark" as="header" data-page-section>
      <HeaderText as="h1">
        Web Developer powered by <Battery>passion</Battery>
      </HeaderText>
    </SectionWrapper>
  )
}

export default Intro
