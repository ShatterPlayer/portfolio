import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.2);
  width: 100%;
  height: 70px;
  z-index: 99;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`

const ListItem = styled.li`
  padding: 10px;
  border: 5px solid white;
  border-radius: 30px;
`

const ListItemsJoin = styled.li`
  width: 100px;
  height: 5px;
  border-bottom: 5px solid white;
`

function Navigation() {
  return (
    <Nav>
      <List>
        <ListItem>About me</ListItem>
        <ListItemsJoin />
        <ListItem>Projects</ListItem>
        <ListItemsJoin />
        <ListItem>Contact</ListItem>
      </List>
    </Nav>
  )
}

export default Navigation
