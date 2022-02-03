import React from 'react';

import FooterContainer from 'app/pages/@containers/Footer/FooterContainer';
import DocsNavBarContainer from 'app/pages/@containers/DocsNavBar/DocsNavBar';

import addSiteImg from "app/assets/imgs/docs/app_screens/add_site.jpeg";
import dashboardImg from "app/assets/imgs/docs/app_screens/dashboard.jpeg";
import hostsImg from "app/assets/imgs/docs/app_screens/hosts.jpeg";
import problemsImg from "app/assets/imgs/docs/app_screens/problems.jpeg";
import setNameImg from "app/assets/imgs/docs/app_screens/set_name.jpeg";
import hostDetailedImg from "app/assets/imgs/docs/app_screens/host_detailed.jpeg";
import problemHistoryImg from "app/assets/imgs/docs/app_screens/problem_history.jpeg";
import graphsImg from "app/assets/imgs/docs/app_screens/graphs.jpeg";

import { Content } from './styles';
import { Title, SubTitle, Text, AssetImage } from '../../DocsStyles';
import TextLink from 'app/styled-components/TextLink';

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
                <AssetImage src={addSiteImg} />
                <Text style={{ marginTop: 1 + 'vh' }}>5. Provide a name for the new site, may be anything and is only used to describe the site inside de application</Text>
                <AssetImage src={setNameImg} />
                <Text style={{ marginTop: 1 + 'vh' }}>6. Provide your Zabbix address, if you are using HTTPS the CERTIFICATE MUST BE VALID, self-signed certificates WILL NOT WORK. Press "TEST SITE" to test the communication with the site, if successful should return Zabbix version</Text>
                <Text>7. Finally, if you picked up "TOKEN" in step 4, provide your API token. Otherwise provide an username/password</Text>

                <Title>Tour</Title>
                <Text>Once you added a site, the application automatically starts fetching the required information every minute and notifies you if a new problem is created</Text>
                <Text>You should be redirected to "Dashboard" page right after, there a summary similar to Zabbix Dashboard will be presented to you</Text>
                <AssetImage src={dashboardImg} />
                <Text style={{ marginTop: 1 + 'vh' }}>From there you can naviagte to "Problems" page, where all problems created are presented to you along with it's acknowledges</Text>
                <Text>Severity level is defined by the banner's color, the first line is the hostname, followed by the occurance time and the problem description</Text>
                <AssetImage src={problemsImg} />
                <Text style={{ marginTop: 1 + 'vh' }}>You can also naviagte to "Hosts" page where all hosts are displayed, for now it has only the ongoing problems counter displayed on it's container, but more features are on the roadmap</Text>
                <AssetImage src={hostsImg} />
                <Text style={{ marginTop: 1 + 'vh' }}>Wheter you are at "Problems" or "Hosts" page, if you press any of the containers you will be presented with the host informations on a new page, from there you can search for the host "Problem History" and view the host "Graphs"</Text>
                <AssetImage src={hostDetailedImg} />
                <Text style={{ marginTop: 1 + 'vh' }}>On "Problem History" page, you can search for resolved problems for the specific host between a custom date range</Text>
                <Text style={{ marginTop: 1 + 'vh' }}>On "Graphs" page, you can view host graphs, for now with limited options</Text>

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