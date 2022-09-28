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
import AppWrapper from './components/AppWrapper'

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

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    color: ${theme.colors.light};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Navigation />
        <Intro />
        <AboutMe />
        <Projects />
        <Contact />
        <GlobalStyle />
      </AppWrapper>
    </ThemeProvider>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration)
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
