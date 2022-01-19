import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import {
    MenuWrapper, NavbarWrapper, ItemImage,
    ContentWrapper, MenuText, CarouselImage,
    ItemWrapper, ItemText, IconImage,
    ItemTitleText, CircleWithIcon,
    ItemTextContainerRight, ItemTextContainerLeft,
} from './styles';
import { AccountTree, Key, Notifications, BarChart } from '@mui/icons-material';

import a from "app/assets/imgs/home/1.png"
import b from "app/assets/imgs/home/2.png"
import icon from "app/assets/imgs/app/icon.png";

function HomePage() {
    return (
        <>
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

            <Carousel>
                <Carousel.Item>
                    <CarouselImage
                        src={a}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage
                        src={b}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage
                        src={a}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <ContentWrapper>
                <ItemWrapper>
                    <CircleWithIcon>
                        <AccountTree sx={iconSx} />
                    </CircleWithIcon>
                    <ItemTextContainerLeft>
                        <ItemTitleText>Multiple sites</ItemTitleText>
                        <ItemText>The app was developed and tested only on version 5.4, compatibility with older versions is not guaranteed</ItemText>
                    </ItemTextContainerLeft>
                </ItemWrapper>

                <ItemWrapper>
                    <ItemTextContainerRight>
                        <ItemTitleText>API tokns</ItemTitleText>
                        <ItemText>
                            API tokens are supported while you can still use the old user and password method
                        </ItemText>
                    </ItemTextContainerRight>
                    <CircleWithIcon>
                        <Key sx={iconSx} />
                    </CircleWithIcon>
                </ItemWrapper>

                <ItemWrapper>
                    <CircleWithIcon>
                        <Notifications sx={iconSx} />
                    </CircleWithIcon>
                    <ItemTextContainerLeft>
                        <ItemTitleText>Notifications</ItemTitleText>
                        <ItemText>Choose the severity level and get notified when a new problem is generated</ItemText>
                    </ItemTextContainerLeft>
                </ItemWrapper>

                <ItemWrapper>
                    <ItemTextContainerRight>
                        <ItemTitleText>Graphs</ItemTitleText>
                        <ItemText>
                            Minute by minute graphs
                        </ItemText>
                    </ItemTextContainerRight>
                    <CircleWithIcon>
                        <BarChart sx={iconSx} />
                    </CircleWithIcon>
                </ItemWrapper>
            </ContentWrapper>
        </>
    );
}

const iconSx = {
    color: "#f44336",
    width: 20 + 'vw',
    height: 20 + 'vh',
};

export default HomePage;
