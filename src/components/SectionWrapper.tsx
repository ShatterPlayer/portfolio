import styled from 'styled-components'

interface Props {
  color: 'dark' | 'blue' | 'green' | 'yellow' | 'light'
}

const SectionWrapper = styled.section<Props>`
  background-color: ${props => props.theme.colors[props.color]};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`

export default SectionWrapper
