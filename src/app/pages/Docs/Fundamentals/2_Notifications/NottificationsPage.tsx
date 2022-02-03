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
import TextLink, { TextMark } from 'app/styled-components/TextLink';

function NottificationsPage() {

    return (
        <>
            <DocsNavBarContainer />
            <Content>
                <Title>Notifications</Title>
                <Text>This section of the documentation describes all you need to know about the notification system</Text>

                <SubTitle>Enabling notifications</SubTitle>
                <Text>You have to manually enable them in the "Preferences" page, as shown bellow, you may choose an interval or let them disabled.
                    Note that you may configure an interval for notifications when the application is open and when it's running on the background. <TextLink>**</TextLink> Note that you are required to "Disable Battery Optimization" for the Handy Zabbix application before you are
                    able to activate background notifications, otherwise it wouldn't work anyway since Android would terminate the application when it goes to background</Text>

                <SubTitle>Extra preferences</SubTitle>
                <Text><TextLink>Notify unreachable sites:</TextLink> you may also enable this option which notifies you when your phone can't reach a particular site of yours, this means that if you lose connection to your site somehow you won't receive problems notification, <TextMark>by default it's disabled</TextMark></Text>
                <Text><TextLink>Notify {"if >="} ?:</TextLink> you may select the minimum problem severity that triggers notifications, so you won't be notified of problems with severity bellow the configured, <TextMark>by default it's "AVERAGE"</TextMark></Text>
                <Text><TextLink>Notify acknowledged problems:</TextLink> you may choose to not be notified if a problem has been acknowledged, <TextMark>by default it's enabled</TextMark></Text>


                <SubTitle>Notes</SubTitle>
                <Text>* The interval selected for background notification is not 100% precise, it may be fired after or even before since the Androis O.S schedules it</Text>
                <Text>** You are required to "Disable Battery Optimization" for the Handy Zabbix application before you are
                    able to activate background notifications, otherwise it wouldn't work anyway since Android would terminate the application when it goes to background</Text>

            </Content>
            <FooterContainer />
        </>
    );
}

export default NottificationsPage;