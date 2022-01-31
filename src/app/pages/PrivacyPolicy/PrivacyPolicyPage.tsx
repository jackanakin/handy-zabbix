import React from 'react';

import TextLink from 'app/styled-components/TextLink';
import FooterContainer from '../@containers/Footer/FooterContainer';
import NavBarContainer from '../@containers/NavBar/NavBarContainer';
import { Title, Text, FAQTitle, Content } from './styles';

function PrivacyPolicyPage() {
    return (
        <>
            <NavBarContainer />
            <Title>Handy Zabbix Privacy Policy</Title>
            <Content>
                <Text>This privacy policy is applied to the "Application" Handy Zabbix, which is only available at <TextLink href='https://play.google.com/store/apps/details?id=br.dev.kuhn.handyzabbix'>Google Play</TextLink> for download</Text>
                <Text>The Application purpose is to provide an useful integration for Android phones with <TextLink href='https://www.zabbix.com/' >Zabbix</TextLink> monitoring system</Text>
                <Text>I (Jardel Kuhn), the sole creator and developer of this Application, do not have or maintain any contact or relationship with the Zabbix official team, and developed this application for personal use cases</Text>

                <FAQTitle>What information does the Application obtain and how is it used?</FAQTitle>
                <Text>No personal/private data or any described in <TextLink href='https://support.google.com/googleplay/android-developer/answer/10787469?hl=en#types&zippy=%2Cdata-types'>Play Console Help</TextLink> "Data types" are collected, stored or shared</Text>
                <Text>After you provide, sites token/credentials are stored in an encrypted local storage (inside you phone) and are required for the Application to function, they are required for every request that the Application makes to your site and thats their only use case</Text>
                <Text>Also, note that the Application make use of some/all data provided by API's in the <TextLink href='https://www.zabbix.com/documentation/current/en/manual/api/reference'>Zabbix API Method reference</TextLink>, part of this data may be stored in your phone local storage for the Application to work correctly. These data are only used/processed/stored by the Application itself, nothing is shared or collected by third parties</Text>

                <FAQTitle>How is data transfered between the site and the Application ?</FAQTitle>
                <Text>The Application consumes Zabbix sites API directly, no data is sent to another destination</Text>
                <Text>Note that the Application support both HTTP(insecure) and HTTPS(secure) protocols, it's your responsibility and risk to choose between them</Text>

                <FAQTitle>Security</FAQTitle>
                <Text>All data consumed or used by the Application is transmitted directly from the Zabbix site API to your phone, therefore I share no responsibility securing this transit or data</Text>
                <Text>All data consumed or used by the Application is done using exposed API's from Zabbix servers, therefore I share no responsibility securing these endpoints, APIs, servers and assets</Text>
                <Text>Note that the Application support both HTTP(insecure) and HTTPS(secure) protocols, it's your responsibility and risk to choose between them</Text>
                <Text>Sites credentials/tokens as well their permissions are defined in your Zabbix site instance as described <TextLink href='https://www.zabbix.com/documentation/current/en/manual/config/users_and_usergroups'>here</TextLink>, therefore I share no responsibility securing these credentials/tokens and their respective permissions</Text>

                <FAQTitle>Changes</FAQTitle>
                <Text>This Privacy Policy may be updated from time to time as the Application evolves with more features, fixes or changes. Any changes to Privacy Policy will be posted here. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes</Text>

                <FAQTitle>Your Consent</FAQTitle>
                <Text>By using the Application, you are consenting to the processing of the informations described as set forth in this Privacy Policy now and as amended by</Text>

                <FAQTitle>Contact me</FAQTitle>
                <Text>If you have any questions regarding privacy while using the Application, or have questions about my practices, please contact me via email at jkuhn2@universo.univates.br</Text>

                <FAQTitle>Keywords meaning</FAQTitle>
                <Text>1. Zabbix site/server means any system/computer/resource hosting an instance of the official <TextLink href='https://www.zabbix.com'>Zabbix Monitoring System</TextLink></Text>
                <Text>2. Zabbix API refers to the official Zabbix API's as defined <TextLink href='https://www.zabbix.com/documentation/current/en/manual/api'>here</TextLink></Text>
                <Text>3. The "Application" referenced in this policy privacy is Handy Zabbix which is only available in the official Google Play Store, found <TextLink href='https://play.google.com/store/apps/details?id=br.dev.kuhn.handyzabbix'>here</TextLink></Text>

            </Content>
            <FooterContainer />
        </>
    );
}

export default PrivacyPolicyPage;