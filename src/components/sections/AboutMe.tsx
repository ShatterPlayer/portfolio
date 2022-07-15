import React, { useContext } from 'react'
import { motion } from 'framer-motion'

import Headline from '../Headline'
import TechStack from '../TechStack'
import Summary from '../Summary'
import SectionWrapper from '../SectionWrapper'
import { Context } from '../Context'

function AboutMe() {
  const { setCurrentSection } = useContext(Context)

  return (
    <motion.article
      onViewportEnter={() => setCurrentSection(1)}
      viewport={{ amount: 0.2 }}
    >
      <SectionWrapper bgcolor="green">
        <Headline>About Me</Headline>
        <Summary />
      </SectionWrapper>
      <SectionWrapper bgcolor="green">
        <TechStack />
      </SectionWrapper>
    </motion.article>
  )
}

export default AboutMe
