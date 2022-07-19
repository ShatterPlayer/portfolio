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

const menuItems = ['About me', 'Projects', 'Contact']
const menuItemsAnchors = menuItems.map(
  item => `#${item.replace(/\s/g, '').toLowerCase()}`
)

function Outline({ bordercolor }: Pick<MenuProps, 'bordercolor'>) {
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

    const maxScrollPosition =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    // If the user is at the bottom of the page, set the current section to the last section number + 1
    // Progress bar will be at the very end of the menu
    if (maxScrollPosition <= window.scrollY) {
      sectionNumber = pageSections.current.length
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
    window.addEventListener('resize', calculateSectionsPositions)

    document.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      document.removeEventListener('scroll', handleScroll)
      document.removeEventListener('load', calculateSectionsPositions)
      document.removeEventListener('resize', calculateSectionsPositions)
    }
  }, [])

  return (
    <Nav>
      <MenuContainer>
        <Menu borderhidden>
          <MenuItemsJoin />
          {menuItems.map((item, index) => (
            <React.Fragment key={item}>
              <li>
                <MenuItem href={menuItemsAnchors[index]}>{item}</MenuItem>
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
