import { Container, Navbar, Image } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import styled from "styled-components";

import { darkTheme } from 'app/themes/themes/darkTheme';

export const CircleWithIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    width: 10vw;
    background-color: white;
    border-radius: 50%;
`;

export const ItemTextContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
`;

export const ItemTextContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 30%;
`;

export const IconImage = styled(Image).attrs({
    height: '20vh', width: '20vw', roundedCircle: true
})``;

export const ItemTitleText = styled(Typography).attrs({
    variant: "h6", style: { padding: 1 + 'vw' }
})`
    color: ${darkTheme.text.primaryColor};
    font-weight: bolder;
`;

export const ItemText = styled(Typography).attrs({
    variant: "subtitle2", style: { padding: 1 + 'vw' }
})`
    color: ${darkTheme.text.primaryColor};
`;

export const ItemImage = styled(Image).attrs({
    height: '200vh', width: '200vw', roundedCircle: true
})``

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const CarouselImage = styled.img`
    width: 100%;
    height: 40vh;
`;

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
    margin-left: 0.5vw;
`;

export const MenuWrapper = styled(Container)`
    width: 100vw;
`;