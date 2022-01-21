import { Container, Navbar, Image } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import styled from "styled-components";

import { darkTheme } from 'app/themes/themes/darkTheme';

export const CopyrightText = styled.p`
    text-align: center;
    color: ${darkTheme.text.primaryColor};
    font-size: 0.7em;
    margin-top: 21px;
`;

export const CircleContent = styled.div`
    display: table-cell;
    padding: 1em;
    vertical-align: middle;
`;

export const CircleWrapper = styled.div`
    display: table;
    width: 100%;
    height: 100%;
`;

export const CircleInner = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Circle = styled.div`
    background-color: white;
    color: blue;
    text-align: center;
    border-radius: 50%;
`;

export const ItemTextContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 30%;
    @media(max-width: 800px){
        width: 100%;
    }
`;

export const ItemTextContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 1vh;

    width: 30%;
    @media(max-width: 800px){
        width: 100%;
    }
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
    variant: "body2", style: { padding: 1 + 'vw' }
})`
    color: ${darkTheme.text.primaryColor};
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1vh;
`;

export const CarouselImage = styled.img`
    width: 100%;
    height: 33vh;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
    padding: 25px;
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