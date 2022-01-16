import { Container, Navbar } from 'react-bootstrap';
import styled from "styled-components";

import { darkTheme } from 'app/themes/themes/darkTheme';

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
`;

export const NavbarWrapper = styled(Navbar).attrs({
    expand: "lg",
})`
    width: 100vw;
`;

export const MenuText = styled.text`
    color: ${darkTheme.text.primaryColor};
`;

export const MenuWrapper = styled(Container)`
    width: 100vw;
`;