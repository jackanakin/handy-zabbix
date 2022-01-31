import styled from "styled-components";
import { darkTheme } from 'app/themes/themes/darkTheme';

const TextLink = styled.a.attrs({
    target: "_blank"
})`
    color: ${darkTheme.text.linkColor};
    text-decoration: none;

    &:hover {
        color: ${darkTheme.text.porcelanColor};
        text-decoration: underline;
    }
    &:visited {
        color: pink;
        text-decoration: none;
    }
`;

export default TextLink;