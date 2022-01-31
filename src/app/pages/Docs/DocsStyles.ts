import Typography from '@mui/material/Typography';
import styled from "styled-components";
import Image from 'react-bootstrap/Image'

import { darkTheme } from 'app/themes/themes/darkTheme';

export const AssetImage = styled(Image).attrs({
    width: 300 + 'vw', height: 600 + 'vw', rounded: true,
})`
    align-self: center;
`;

export const SubTitle = styled(Typography).attrs({
    variant: "h5", style: { paddingTop: 1 + 'vw', paddingBottom: 1 + 'vw' }
})`
    color: ${darkTheme.text.primaryColor};
    font-weight: bolder;
    text-align: left;
`;

export const Title = styled(Typography).attrs({
    variant: "h4", style: { paddingTop: 1 + 'vw', paddingBottom: 1 + 'vw' }
})`
    color: ${darkTheme.text.primaryColor};
    font-weight: bolder;
    text-align: left;
`;

export const Text = styled.p`
    color: ${darkTheme.text.porcelanColor};
    text-align: left;
    margin: 0;
`;