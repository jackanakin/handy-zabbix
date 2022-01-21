import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import {
    MenuWrapper, NavbarWrapper,
    ContentWrapper, MenuText, CarouselImage,
    ItemWrapper, ItemText, IconImage,
    ItemTitleText,
    ItemTextContainerRight, ItemTextContainerLeft,
    Circle, CircleInner, CircleWrapper, CircleContent,
    CopyrightText,
} from './styles';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import {
    AccountTree, Key,
    Notifications, BarChart
} from '@mui/icons-material';

import a from "app/assets/imgs/home/1.png"
import b from "app/assets/imgs/home/2.png"
import icon from "app/assets/imgs/app/icon.png";
import { darkTheme } from 'app/themes/themes/darkTheme';

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
                    <CustomCircle>
                        <AccountTree sx={iconSx} />
                    </CustomCircle>
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
                    <CustomCircle>
                        <Key sx={iconSx} />
                    </CustomCircle>
                </ItemWrapper>

                <ItemWrapper>
                    <CustomCircle>
                        <Notifications sx={iconSx} />
                    </CustomCircle>
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
                    <CustomCircle>
                        <BarChart sx={iconSx} />
                    </CustomCircle>
                </ItemWrapper>
            </ContentWrapper>

            <Footer />
        </>
    );
}

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>FIND ME</Heading>
                        <FooterLink href="https://github.com/jackanakin">GitHub</FooterLink>
                        <FooterLink href="mailto:jkuhn2@universo.univates.br">Email</FooterLink>
                    </Column>
                    <Column>
                        <Heading>DOCS</Heading>
                    </Column>
                    <Column>
                        <Heading>DOWNLOAD</Heading>
                        <FooterLink href="https://play.google.com/store/apps/details?id=br.dev.kuhn.handyzabbix">Google Play</FooterLink>
                    </Column>
                    <Column>
                        <Heading>SUPPORT</Heading>
                        <a href="https://www.buymeacoffee.com/jardelkuhn" target="_blank" rel="noreferrer">
                            <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                                alt="Buy Me A Coffee" style={{ height: 60 + 'px', width: 217 + 'px' }} />
                        </a>
                    </Column>
                </Row>
            </Container>
            <CopyrightText>Copyright © 2022 Jardel Kuhn</CopyrightText>
        </Box>
    );
};

function CustomCircle({ children }: any) {
    return (
        <Circle>
            <CircleInner>
                <CircleWrapper>
                    <CircleContent>
                        {children}
                    </CircleContent>
                </CircleWrapper>
            </CircleInner>
        </Circle>
    );
}

const iconSx = {
    color: darkTheme.pages.home.icon,
    width: 9 + 'vw',
    height: 9 + 'vh',
};

export default HomePage;
