import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

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
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/"><MenuText>Home</MenuText></Nav.Link>
                        <Nav.Link href="/docs_fundamentals_gettingstarted"><MenuText>Docs</MenuText></Nav.Link>
                        <Nav.Link href="/privacypolicy"><MenuText>Privacy Policy</MenuText></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </MenuWrapper>
        </NavbarWrapper>
    );
}

export default NavBarContainer;