import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar bg='info' variant='dark' collapseOnSelect expand='md' >
        <Navbar.Brand>
            Logo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav' >
            <Nav className='ml-auto'>
                <Nav.Link href='/Dashboard'>Dashboard</Nav.Link>
                <Nav.Link href='/Ticktes'>Tickets</Nav.Link>
                <Nav.Link href='/Logout'>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
