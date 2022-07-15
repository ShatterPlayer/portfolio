import styled, { DefaultTheme } from 'styled-components'
const SectionWrapper = styled.section<{
  bgcolor: keyof DefaultTheme['colors']
}>`
  background-color: ${props => props.theme.colors[props.bgcolor]};
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 50px;

  @media (max-width: 770px) {
    padding: 25px;
  }
`

export default SectionWrapper
