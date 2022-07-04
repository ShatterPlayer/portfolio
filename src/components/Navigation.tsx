import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

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
  position: relative;
`

const menuItemWidth = 120

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

const MenuOutline = styled(Menu)<MenuProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`

const MenuItem = styled.a`
  width: ${menuItemWidth}px;
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
  width: calc((100% - 3 * ${menuItemWidth}px) / 4);
  height: 5px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.light};
`

const ProgressOutline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: calc(50% + ${menuItemWidth}px + (100% - 3 * ${menuItemWidth}px) / 4);
  z-index: -1;

  & ${Menu} {
    position: absolute;
    top: 0;
    left: 0;
  }
`

interface MenuProps {
  bordercolor?: keyof DefaultTheme['colors']
  borderhidden?: boolean
}

function Navigation() {
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

        <MenuOutline bordercolor="light">
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

        <ProgressOutline>
          <Menu bordercolor="yellow">
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
          </Menu>
        </ProgressOutline>
      </MenuContainer>
    </Nav>
  )
}

export default Navigation
