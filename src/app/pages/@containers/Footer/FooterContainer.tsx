import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
    CopyrightText
} from "./styles";

function FooterContainer() {
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
}

export default FooterContainer;