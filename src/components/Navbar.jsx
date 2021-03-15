import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';

export const Navbarcomp = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Link to="/"> <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/"><span className="nav-link">Home</span></Link> 
                    <Link to="/about"> <span className="nav-link">about</span ></Link>
                    <NavDropdown title={<AccountCircleIcon fontSize="small"/>} className="d-none d-lg-block"  id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">info</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">log-in/out</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  className="d-block d-lg-none">profile</Nav.Link>
                    <Nav.Link ><ShoppingCartRoundedIcon/></Nav.Link>
                </Nav>  </Navbar.Collapse></Container>
        </Navbar>
    )
}
export default Navbarcomp;