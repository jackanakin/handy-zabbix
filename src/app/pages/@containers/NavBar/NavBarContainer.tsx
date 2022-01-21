import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import {
    MenuWrapper, NavbarWrapper,
    MenuText, IconImage,
} from './styles';
import icon from "app/assets/imgs/app/icon.png";

function NavBarContainer() {
    return (
        <NavbarWrapper bg="dark" expand="lg" variant="dark" className="ml-auto">
            <MenuWrapper>
                <Navbar.Brand>
                    <IconImage src={icon} alt='Site icon' />
                    <MenuText>Handy Zabbix</MenuText>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse color='blue' id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><MenuText>Home</MenuText></Nav.Link>
                        <Nav.Link href="#home"><MenuText>Docs</MenuText></Nav.Link>
                        <Nav.Link href="#home"><MenuText>Privacy Policy</MenuText></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </MenuWrapper>
        </NavbarWrapper>
    );
}

export default NavBarContainer;