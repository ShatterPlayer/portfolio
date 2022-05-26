import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import JosefinSansRegular from './fonts/JosefinSans-Regular.woff2'
import JosefinSansBold from './fonts/JosefinSans-Bold.woff2'
import KaushanScript from './fonts/KaushanScript-Regular.woff2'

import Intro from './components/sections/Intro'

const theme = {
  colors: {
    dark: '#073B4C',
    blue: '#118AB2',
    green: '#06D6A0',
    yellow: '#FFD166',
    light: '#FFFFFF',
  },
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Josefin Sans';
    weight: normal;
    src: url(${JosefinSansRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Josefin Sans';
    weight: bold;
    src: url(${JosefinSansBold}) format('woff2');
  }

  @font-face {
    font-family: 'Kaushan Script';
    weight: normal;
    src: url(${KaushanScript}) format('woff2');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Intro />
      <GlobalStyle />
    </ThemeProvider>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
