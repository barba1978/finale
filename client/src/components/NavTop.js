import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'




function NavTop(){
return(
    <div>
     <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">DayCare App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Nursery</Nav.Link>
      <Nav.Link href="/parents">Parents</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 

    </div>
    )
}

export default NavTop

