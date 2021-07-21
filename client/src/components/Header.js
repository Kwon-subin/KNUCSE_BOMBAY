import React from 'react';
import {Link} from 'react-router-dom';

import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './header.css'

const Header = ({is_logged_in}) => {
    return (
    <Navbar bg="light" variant="light">
    <Container style={{display:'unset'}}>
    <Nav className="me-auto" style={{display:'flex', justifyContent:'space-between'}}>
      <div className='shownComp'>
        <Navbar.Brand href="/">Mentor</Navbar.Brand>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/match">Matching</Nav.Link>
        <Nav.Link href="speedmatch">Speedy</Nav.Link>
      </div>
      <div className={is_logged_in ? "hiddenComp" : "shownComp"}>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </div>
      <div className={!is_logged_in ? "hiddenComp" : "shownComp"}>
        <Nav.Link href="/login">개인정보</Nav.Link>
        <Nav.Link href="/register">Logout</Nav.Link>
      </div>

    </Nav>
    </Container>
  </Navbar>
    )
}

export default Header
