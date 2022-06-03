import React from 'react'

import Headline from '../Headline'
import TechStack from '../TechStack'
import Summary from '../Summary'
import SectionWrapper from '../SectionWrapper'

function AboutMe() {
  return (
    <>
      <SectionWrapper color="green">
        <Headline>About Me</Headline>
        <Summary />
      </SectionWrapper>
      <SectionWrapper color="green">
        <TechStack />
      </SectionWrapper>
    </>
  )
}

export default AboutMe
