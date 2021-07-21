import React from 'react';
import axios from 'axios';

import { message } from 'antd';
import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './header.css'
import Title from '../img/Title.png'

function Header({history}){
  let store = window.localStorage.getItem("uid")
  let is_logged_in=false;
  if(store) {
    console.log('1 : '+store)
    is_logged_in = true
  }
  const goLogout = () => {
    axios.get('/user/logout'
    ).then(function (res) {
      if (res.data) {
        message.info('로그아웃 완료');
        window.localStorage.clear()
        history.push('/')
      } else {
        alert('왠진 모르지만 로그아웃이 실패함')
      }
    })
  }
  
    return (
    <Navbar bg="light" variant="light" style={{zIndex:200,position:'sticky', top:'0px'}}>
    <Container style={{display:'unset'}}>
    <Nav className="me-auto" style={{display:'flex', justifyContent:'space-between'}}>
      <div className='shownComp'>
        <Navbar.Brand href="/" style={{padding:'0'}}><img src={Title} alt='logo' width='95px'/></Navbar.Brand>
        <Nav.Link href="/match" >Matching</Nav.Link>
        <Nav.Link href="speedmatch">Speedy</Nav.Link>
        <Nav.Link href="/notice">Notice</Nav.Link>
      </div>
      <div className={is_logged_in ? "hiddenComp" : "shownComp"}>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </div>
      <div className={!is_logged_in ? "hiddenComp" : "shownComp"}>
        <Nav.Link href="/mypage">My Page</Nav.Link>
        <Nav.Link onClick={goLogout}>Logout</Nav.Link>
      </div>
    </Nav>
    </Container>
  </Navbar>
    )
}

export default Header
