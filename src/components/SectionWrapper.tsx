import styled, { DefaultTheme } from 'styled-components'

const SectionWrapper = styled.section<{
  backgroundColor: keyof DefaultTheme['colors']
}>`
  background-color: ${props => props.theme.colors[props.backgroundColor]};
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`

export default SectionWrapper
