import React from 'react'

import Headline from '../Headline'
import TechStack from '../TechStack'
import Summary from '../Summary'
import SectionWrapper from '../SectionWrapper'

function AboutMe() {
  return (
    <>
      <SectionWrapper backgroundColor="green">
        <Headline>About Me</Headline>
        <Summary />
      </SectionWrapper>
      <SectionWrapper backgroundColor="green">
        <TechStack />
      </SectionWrapper>
    </>
  )
}

export default AboutMe
