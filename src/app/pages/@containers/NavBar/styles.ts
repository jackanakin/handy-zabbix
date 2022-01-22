import { Container, Navbar, Image } from 'react-bootstrap';
import styled from "styled-components";

import { darkTheme } from 'app/themes/themes/darkTheme';

export const IconImage = styled(Image).attrs({
    height: '45vh', width: '45vw', roundedCircle: true
})``;

export const NavbarWrapper = styled(Navbar).attrs({
    expand: "lg",
})`
    width: 100vw;
`;

export const MenuText = styled.text`
    color: ${darkTheme.text.primaryColor};
    margin-left: 0.5vw;
`;

export const MenuWrapper = styled(Container)`
    width: 100vw;
`;