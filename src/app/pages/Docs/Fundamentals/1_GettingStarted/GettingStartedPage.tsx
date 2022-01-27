import React from 'react';

import FooterContainer from 'app/pages/@containers/Footer/FooterContainer';
import DocsNavBarContainer from 'app/pages/@containers/DocsNavBar/DocsNavBar';

import { Content } from './styles';
import { Title, SubTitle, Text, TextLink } from '../../DocsStyles';

function GettingStartedPage() {

    return (
        <>
            <DocsNavBarContainer />
            <Content>
                <Title>Getting started</Title>
                <Text>This section of the documentation describes basic aspects of Handy Zabbix. It should cover enough for you to know how to set up a monitoring site on your Android phone, and give you the background of the basic funcionalities of the application</Text>
                <SubTitle>Pre-requisites</SubTitle>
                <Text>You must have an instance of <TextLink href='https://www.zabbix.com/'>Zabbix</TextLink> running, if you don't have one please visit the official documentation <TextLink href='https://www.zabbix.com/manuals'>here</TextLink>. Handy Zabbix makes use of <TextLink href='https://www.zabbix.com/documentation/current/en/manual/api'>Zabbix's API</TextLink>, therefore the application must be able communicate with the web port of Zabbix. Also, you need and Android phone to install the application.</Text>
                <Text>In short, here are the things you need:</Text>
                <Text>1. <TextLink>Zabbix instance</TextLink> (Prior to 5.4 not tested)</Text>
                <Text>2. TCP communication between your phone and Zabbix web port (HTTP or HTTPS)</Text>
                <Text>3. Handy Zabbix installed in your phone, download <TextLink href='https://play.google.com/store/apps/details?id=br.dev.kuhn.handyzabbix'>here</TextLink></Text>
                <Title>Setting up</Title>
                <Text>After installed, open up the application in your phone</Text>
                <Text>1. Pickup a language</Text>
                <Text>2. Select a theme</Text>
                <Text>3. Press "ADD SITE" </Text>
                <Text>4. If you have an username and password, use "CREDENTIALS", if you have a token choose "TOKEN"</Text>
                <Text>5. Provide a name for the new site, may be anything and is only used to describe the site inside de application</Text>
                <Text>6. Provide your Zabbix address, if you are using HTTPS the CERTIFICATE MUST BE VALID, self-signed certificates WILL NOT WORK. Press "TEST SITE" to test the communication with the site, if successful should return Zabbix version</Text>
                <Text>7. Finally, if you picked up "TOKEN" in step 4, provide your API token. Otherwise provide an username/password</Text>

                <Title>Tour</Title>
                <Text>Once you added a site, the application automatically starts fetching the required information every minute and notifies you if a new problem is created</Text>

                <Title>Notes</Title>
                <Text>* If you have question about token/credential, check out <TextLink>here</TextLink></Text>
                <Text>** For successful background notifications, an additional step is required, check out <TextLink>here</TextLink></Text>
                <Text>*** You can customize some settings such mininum severity for notifications, background interval and more in "[icon] PREFERENCES", check out <TextLink>here</TextLink></Text>
            </Content>
            <FooterContainer />
        </>
    );
}

export default GettingStartedPage;