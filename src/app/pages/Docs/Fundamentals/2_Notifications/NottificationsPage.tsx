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

function NottificationsPage() {

    return (
        <>
            <DocsNavBarContainer />
            <Content>
                <Title>Notifications</Title>
                <Text>This section of the documentation describes all you need to know about the notification system</Text>
                
                
                <Title>Notes</Title>
                
            </Content>
            <FooterContainer />
        </>
    );
}

export default NottificationsPage;