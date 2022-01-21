import Typography from '@mui/material/Typography';
import styled from "styled-components";

import { darkTheme } from 'app/themes/themes/darkTheme';

export const Content = styled.div`
    padding-left: 21vw;
    padding-right: 21vw;
    
    min-height: calc(80vh);
`;

export const Text = styled(Typography).attrs({
    variant: "body2"
})`
    color: ${darkTheme.text.porcelanColor};
    text-align: left;
    margin: 0;
`;

export const FAQTitle = styled(Typography).attrs({
    variant: "subtitle1", style: { marginTop: 21 + 'px' }
})`
    color: ${darkTheme.text.primaryColor};
    font-weight: bolder;
    text-align: left;
`;

export const Title = styled(Typography).attrs({
    variant: "h5", style: { padding: 1 + 'vw' }
})`
    color: ${darkTheme.text.primaryColor};
    font-weight: bolder;
    text-align: center;
`;