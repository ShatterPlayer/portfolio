import styled from 'styled-components'

const Headline = styled.h2`
  color: ${props => props.theme.colors.light};
  text-align: center;
  font-size: 65px;

  @media (max-width: 770px) {
    font-size: 40px;
  }
`

export default Headline
