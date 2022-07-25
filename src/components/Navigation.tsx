import React, { useEffect, useRef, useState } from 'react'
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
  --menu-item-width: 120px;
  --menu-items-count: 3;
  --menu-item-join-width: calc(
    (100% - 3 * var(--menu-item-width)) / (var(--menu-items-count) + 1)
  );

  position: relative;
`

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  width: 80vw;
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
`

const MenuItemsJoin = styled.li`
  width: var(--menu-item-join-width);
  height: 5px;
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

function Navigation() {
  const [currentSection, setCurrentSection] = useState(0)

  const pageSections = useRef<{ offsetTop: number }[]>([])

  const handleScroll = () => {
    const scrollTopMiddle = window.scrollY + window.innerHeight / 2
    let sectionNumber = 0

    for (let i = 0; i < pageSections.current.length; i++) {
      if (scrollTopMiddle > pageSections.current[i].offsetTop) {
        sectionNumber = i
      } else {
        break
      }
    }

    setCurrentSection(sectionNumber)
  }

  const calculateSectionsPositions = () => {
    const pageSectionsElements = document.querySelectorAll(
      '[data-page-section]'
    )
    pageSections.current = []
    pageSectionsElements.forEach(pageSection => {
      pageSections.current.push({
        offsetTop: pageSection.getBoundingClientRect().top + window.scrollY,
      })
    })
  }

  useEffect(() => {
    window.addEventListener('load', calculateSectionsPositions)
    window.addEventListener('load', handleScroll)
    window.addEventListener('resize', calculateSectionsPositions)

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
      window.removeEventListener('load', handleScroll)
      window.removeEventListener('load', calculateSectionsPositions)
      window.removeEventListener('resize', calculateSectionsPositions)
    }
  }, [])

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
                    Math.min(currentSection, menuItems.length) === index + 1
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

        <ProgressOutline sectionNumber={currentSection}>
          <Outline bordercolor="yellow" />
        </ProgressOutline>
      </MenuContainer>
    </Nav>
  )
}

export default Navigation
