import Typography from '@mui/material/Typography';
import styled from "styled-components";
import Image from 'react-bootstrap/Image'

import { darkTheme } from 'app/themes/themes/darkTheme';

export const Text = styled(Typography).attrs({
    variant: "body2", style: { padding: 1 + 'vw' }
})`
    color: ${darkTheme.text.porcelanColor};
    text-align: left;
`;

export const Icon = styled(Image).attrs({
    width: 120 + 'vw', height: 120 + 'vw', roundedCircle: true,
})``;

export const ItemTextContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1vw;

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

export const ItemTitleText = styled(Typography).attrs({
    variant: "subtitle1", style: { padding: 1 + 'vw' }
})`
    color: ${darkTheme.text.primaryColor};
    font-weight: bolder;
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
