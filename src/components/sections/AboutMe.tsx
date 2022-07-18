import React from 'react'

import Headline from '../Headline'
import TechStack from '../TechStack'
import Summary from '../Summary'
import SectionWrapper from '../SectionWrapper'

function AboutMe() {
  return (
    <article data-page-section>
      <SectionWrapper bgcolor="green">
        <Headline>About Me</Headline>
        <Summary />
      </SectionWrapper>
      <SectionWrapper bgcolor="green">
        <TechStack />
      </SectionWrapper>
    </article>
  )
}

export default AboutMe
