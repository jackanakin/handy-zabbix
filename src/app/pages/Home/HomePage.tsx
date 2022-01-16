import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { MenuWrapper, NavbarWrapper, ContentWrapper, MenuText } from './styles';
import Typography from '@mui/material/Typography';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { Background } from 'app/styled-components/Background/Background';
import { CarouselImage } from 'app/styled-components/CarouselImage/CarouselImage';

import a from "app/assets/imgs/home/1.png"
import b from "app/assets/imgs/home/2.png"

function HomePage() {
    return (
        <Background>
            <NavbarWrapper bg="dark" expand="lg" variant="dark" className="ml-auto">
                <MenuWrapper>
                    <Navbar.Brand href="#home"><MenuText>jackanakin</MenuText></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse color='blue' id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><MenuText>Home</MenuText></Nav.Link>
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
                <Typography variant="h2" component="div">
                    h1. Heading
                </Typography>

                <Typography variant="subtitle1" gutterBottom component="div">
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                    <AccessAlarm />
                </Typography>
                <ThreeDRotation />
            </ContentWrapper>
        </Background>
    );
}

export default HomePage;
