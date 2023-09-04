import React from 'react';
import { Navbar } from 'react-bootstrap';
import { TopNavBars } from './SideHeaderBar.jsx'


const HeaderBar = () => {
  return (
    <TopNavBars className='topnav'>
        <Navbar
            fixed="top"
            expand="lg"
            bg="danger"
            variant="dark"
          >
            <Navbar.Brand href="">V-Canteen</Navbar.Brand>
        </Navbar>
    </TopNavBars>
  )
}

export default HeaderBar