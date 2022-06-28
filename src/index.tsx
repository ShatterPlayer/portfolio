import React from 'react'
import { createRoot } from 'react-dom/client'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import JosefinSansRegular from './fonts/JosefinSans-Regular.woff2'
import JosefinSansBold from './fonts/JosefinSans-Bold.woff2'
import KaushanScript from './fonts/KaushanScript-Regular.woff2'

import Intro from './components/sections/Intro'
import AboutMe from './components/sections/AboutMe'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Navigation from './components/Navigation'

const theme: DefaultTheme = {
  colors: {
    dark: '#073B4C',
    blue: '#118AB2',
    green: '#06D6A0',
    yellow: '#FFD166',
    light: '#FFFFFF',
    red: '#F25F5C',
  },
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Josefin Sans';
    font-weight: normal;
    src: url(${JosefinSansRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Josefin Sans';
    font-weight: bold;
    src: url(${JosefinSansBold}) format('woff2');
  }

  @font-face {
    font-family: 'Kaushan Script';
    font-weight: normal;
    src: url(${KaushanScript}) format('woff2');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    color: ${theme.colors.light};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Intro />
      <AboutMe />
      <Projects />
      <Contact />

      <GlobalStyle />
    </ThemeProvider>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
