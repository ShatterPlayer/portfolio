import React, { Component, useEffect, useRef, useState } from 'react'
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
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
`
const MenuContainer = styled.div`
  --menu-item-width: 120px;
  --menu-items-count: 3;
  --menu-item-join-width: calc(
    (100% - 3 * var(--menu-item-width)) / (var(--menu-items-count) + 1)
  );

  position: relative;

  @media only screen and (max-width: 500px) {
    --menu-item-width: 100px;
  }
`

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100vw;

  @media only screen and (max-width: 500px) {
    width: unset;
    font-size: 15px;
  }
`

const MenuOutline = styled(Menu)<OutlineProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;

  ${({ bordercolor, theme }) => `
    & ${MenuItem} {
      border: 5px solid ${theme.colors[bordercolor]};
    }

    & ${MenuItemsJoin} {
      border-bottom: 5px solid ${theme.colors[bordercolor]};
    }
  `}
`

const MenuItem = styled.a<{ active?: boolean }>`
  width: var(--menu-item-width);
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-weight: ${({ active }) => (active ? '900' : 'normal')};

  @media only screen and (max-width: 500px) {
    margin: 0 5px;
  }
`

const MenuItemsJoin = styled.li`
  width: var(--menu-item-join-width);
  height: 5px;

  @media only screen and (max-width: 500px) {
    display: none;
  }
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
  transition: width 0.4s ease-in-out;

  & ${Menu} {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const menuItems = ['About me', 'Projects', 'Contact']
const menuItemsAnchors = menuItems.map(
  item => `#${item.replace(/\s/g, '').toLowerCase()}`
)

interface OutlineProps {
  bordercolor: keyof DefaultTheme['colors']
}

function Outline({ bordercolor }: OutlineProps) {
  return (
    <MenuOutline bordercolor={bordercolor}>
      <MenuItemsJoin />
      {menuItems.map(item => (
        <React.Fragment key={item}>
          <li>
            <MenuItem as="span" />
          </li>
          <MenuItemsJoin />
        </React.Fragment>
      ))}
    </MenuOutline>
  )
}

class Navigation extends Component {
  componentDidMount() {
    window.addEventListener('load', this.calculateSectionsPositions)
    window.addEventListener('load', this.handleScroll)
    window.addEventListener('resize', this.handleResize, { passive: true })
    document.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('load', this.handleScroll)
    window.removeEventListener('load', this.calculateSectionsPositions)
    window.removeEventListener('resize', this.handleResize)
  }

  state = {
    currentSection: 0,
  }

  pageSections: { offsetTop: number }[] = []

  resizeTimeout: ReturnType<typeof setInterval> | null = null

  handleScroll = () => {
    console.log('scroll')
    const scrollMiddle = window.scrollY + window.innerHeight / 2

    let sectionNumber = 0

    for (let i = 0; i < this.pageSections.length; i++) {
      if (scrollMiddle > this.pageSections[i].offsetTop) {
        sectionNumber = i
      } else {
        break
      }
    }

    if (sectionNumber !== this.state.currentSection) {
      // First section doesn't have a hash
      if (sectionNumber === 0) {
        history.pushState(null, '', '#')
      } else {
        history.pushState(null, '', menuItemsAnchors[sectionNumber - 1])
      }

      this.setState({ currentSection: sectionNumber })
    }
  }

  calculateSectionsPositions = () => {
    const pageSectionsElements = document.querySelectorAll(
      '[data-page-section]'
    )

    this.pageSections = Array.from(pageSectionsElements).map(pageSection => ({
      offsetTop: pageSection.getBoundingClientRect().top + window.scrollY,
    }))
  }

  // Interval reduces unnecessary calculations while resizing the window
  handleResize = () => {
    clearInterval(this.resizeTimeout)
    this.resizeTimeout = setTimeout(this.calculateSectionsPositions, 300)
  }

  render() {
    return (
      <Nav>
        <MenuContainer>
          <Menu>
            <MenuItemsJoin />
            {menuItems.map((item, index) => (
              <React.Fragment key={item}>
                <li>
                  <MenuItem
                    active={
                      Math.min(this.state.currentSection, menuItems.length) ===
                      index + 1
                    }
                    href={menuItemsAnchors[index]}
                  >
                    {item}
                  </MenuItem>
                </li>
                <MenuItemsJoin />
              </React.Fragment>
            ))}
          </Menu>

          <Outline bordercolor="light" />

          <ProgressOutline sectionNumber={this.state.currentSection}>
            <Outline bordercolor="yellow" />
          </ProgressOutline>
        </MenuContainer>
      </Nav>
    )
  }
}

export default Navigation
