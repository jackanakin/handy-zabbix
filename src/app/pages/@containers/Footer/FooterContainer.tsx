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
                </Row>
            </Container>
            <CopyrightText>Copyright © 2022 Jardel Kuhn</CopyrightText>
        </Box>
    );
}

export default FooterContainer;