import React from 'react'

import SectionWrapper from '../SectionWrapper'
import Headline from '../Headline'
import Project from '../Project'

import quiseImage from '../../images/quise.png'
import fastmemeImage from '../../images/fastmeme.png'

function Projects() {
  return (
    <SectionWrapper backgroundColor="blue">
      <Headline>Projects I've made</Headline>
      <Project
        name="Quise"
        description="Quiz App"
        technologies={[
          'React',
          'Redux',
          'Framer Motion',
          'MongoDB (Atlas)',
          'ExpressJS',
          'JWT',
          'styled-components',
        ]}
        image={quiseImage}
        githubProjectName="quise-frontend"
        website="https://quise.netlify.app/"
      />
      <Project
        name="FastMeme"
        description="Real-Time Memes Generator"
        technologies={[
          'React',
          'Service Worker (PWD)',
          'Jest',
          'HTML Canvas API',
          'styled-components',
        ]}
        image={fastmemeImage}
        githubProjectName="FastMeme"
        website="https://fastmeme.ml/"
      />
    </SectionWrapper>
  )
}

export default Projects
