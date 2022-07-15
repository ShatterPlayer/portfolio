import React, { useContext } from 'react'
import styled, { DefaultTheme } from 'styled-components'

import { Context } from './Context'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 99;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
`
const MenuContainer = styled.div`
  --menu-item-width: 120px;
  --menu-items-count: 3;
  --menu-item-join-width: calc(
    (100% - 3 * var(--menu-item-width)) / (var(--menu-items-count) + 1)
  );

  position: relative;
`

const Menu = styled.ul<MenuProps>`
  list-style: none;
  display: flex;
  align-items: center;
  width: 80vw;

  ${({ borderhidden, theme, bordercolor }) =>
    `
    & ${MenuItem},
    & ${MenuItemsJoin} {
      border-color: ${
        borderhidden ? 'transparent' : theme.colors[bordercolor ?? 'light']
      };
    }
  `}
`

interface MenuProps {
  bordercolor?: keyof DefaultTheme['colors']
  borderhidden?: boolean
}

const MenuOutline = styled(Menu)<MenuProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`

const MenuItem = styled.a`
  width: var(--menu-item-width);
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid ${({ theme }) => theme.colors.light};
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`

const MenuItemsJoin = styled.li`
  width: var(--menu-item-join-width);
  height: 5px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.light};
`

const ProgressOutline = styled.div<{ sectionNumber: number }>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  max-width: 100%;
  width: ${({ sectionNumber }) => `calc(
    (var(--menu-item-join-width) + var(--menu-item-width)) * ${sectionNumber} -
      var(--menu-item-width)/2
  )`};
  z-index: -1;
  transition: width 0.5s ease-in-out;

  & ${Menu} {
    position: absolute;
    top: 0;
    left: 0;
  }
`

function Outline({ bordercolor }: Pick<MenuProps, 'bordercolor'>) {
  return (
    <MenuOutline bordercolor={bordercolor}>
      <MenuItemsJoin />
      <li>
        <MenuItem as="span" />
      </li>
      <MenuItemsJoin />
      <li>
        <MenuItem as="span" />
      </li>
      <MenuItemsJoin />
      <li>
        <MenuItem as="span" />
      </li>
      <MenuItemsJoin />
    </MenuOutline>
  )
}

function Navigation() {
  const { currentSection } = useContext(Context)

  return (
    <Nav>
      <MenuContainer>
        <Menu borderhidden>
          <MenuItemsJoin />
          <li>
            <MenuItem href="#">About me</MenuItem>
          </li>
          <MenuItemsJoin />
          <li>
            <MenuItem href="#">Projects</MenuItem>
          </li>
          <MenuItemsJoin />
          <li>
            <MenuItem href="#">Contact</MenuItem>
          </li>
          <MenuItemsJoin />
        </Menu>

        <Outline bordercolor="light" />

        <ProgressOutline sectionNumber={currentSection}>
          <Outline bordercolor="yellow" />
        </ProgressOutline>
      </MenuContainer>
    </Nav>
  )
}

export default Navigation
