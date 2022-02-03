import React from 'react';

import FooterContainer from 'app/pages/@containers/Footer/FooterContainer';
import DocsNavBarContainer from 'app/pages/@containers/DocsNavBar/DocsNavBar';

import addSiteImg from "app/assets/imgs/docs/app_screens/add_site.jpeg";

import { Content } from './styles';
import { Title, SubTitle, Text } from '../../DocsStyles';
import TextLink, { TextMark } from 'app/styled-components/TextLink';

function NottificationsPage() {

    return (
        <>
            <DocsNavBarContainer />
            <Content>
                <Title>Notifications</Title>
                <Text>This section of the documentation describes all you need to know about the notification system</Text>

                <SubTitle>Enabling notifications</SubTitle>
                <Text>You have to manually enable them in the "Preferences" page, as shown bellow, you may choose an <TextLink>*</TextLink>interval or let them disabled.
                    Note that you may configure an interval for notifications when the application is open and when it's running on the background.
                </Text>

                <SubTitle>Disable Battery Optimization</SubTitle>
                <Text>
                    <TextLink>**</TextLink> Note that you are required to "Disable Battery Optimization" for the Handy Zabbix application before you are
                    able to activate background notifications, otherwise it wouldn't work anyway since Android would terminate the application when it goes to background. The easiest way to do so is opening the "Preferences" page and 
                    clicking on the warning message right bellow "In background, refresh ...", upon clicking it you are redirect to the "App Info" screen, expand the "Advanced" menu and select "Battery"
                </Text>
                <Text>The steps below may vary for each device but the option to be modified is the same for all of them, which is disabling the battery optimization for Handy Zabbix</Text>

                <Text>Now, select "Battery optimization"</Text>

                <Text>In "Battery optimization" screen, you should read a floating button saying "Not optimized", press it and select "All apps"</Text>

                <Text>Now, find the app "Handy Zabbix" and tap it, switch to "Don't optimize" and press "Done"</Text>

                <Text>Go back to the app and open "Preferences" page again, if it's all correct you should be able to select an interval for background notifications</Text>
                
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