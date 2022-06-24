import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

interface ButtonElementProps {
  color: keyof DefaultTheme['colors']
}

const ButtonElement = styled.a<ButtonElementProps>`
  position: relative;
  display: inline-block;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  min-width: 160px;
  text-align: center;
  z-index: 1;
  transition: color 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 5px solid ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.light};
    z-index: -1;
    height: 0;
    transition: height 0.3s ease-in-out;
  }

  :hover {
    color: ${({ theme, color }) => theme.colors[color]};
  }

  :hover:before {
    height: 100%;
  }
`

interface Props extends ButtonElementProps {
  children: string
  linkTo: string
}

function Button({ children, linkTo, color, ...props }: Props) {
  return (
    <ButtonElement color={color} target="blank" href={linkTo} {...props}>
      {children}
    </ButtonElement>
  )
}

export default Button
