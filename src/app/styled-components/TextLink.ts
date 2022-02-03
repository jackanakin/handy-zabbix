import styled from "styled-components";
import { darkTheme } from 'app/themes/themes/darkTheme';

export const TextMark = styled.a`
    color: pink;
    text-decoration: none;
    &:hover {
        color: ${darkTheme.text.porcelanColor};
        text-decoration: underline;
    }
`;

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