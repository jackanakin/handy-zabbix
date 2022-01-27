import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import {
    MenuWrapper, NavbarWrapper,
    MenuText, IconImage,
} from './styles';
import icon from "app/assets/imgs/app/icon.png";

function DocsNavBarContainer() {
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
                        {/** RETURN TO HOME */}
                        <Nav.Link href="/"><MenuText>Back to home</MenuText></Nav.Link>

                        {/** FUNDAMENTALS */}
                        <NavDropdown title="Fundamentals" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/docs/fundamentals/gettingstarted">Getting started</NavDropdown.Item>
                        <NavDropdown.Item href="/docs/fundamentals/notifications">Notifications</NavDropdown.Item>
                        </NavDropdown>

                        {/** GUIDES */}
                        <NavDropdown title="Guides" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/docs/guides/addingsites">Adding sites</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </MenuWrapper>
        </NavbarWrapper>
    );
}

export default DocsNavBarContainer;