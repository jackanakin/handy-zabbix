import React from 'react';

import {
    ContentWrapper, ItemWrapper,
    ItemTextContainerRight, ItemTextContainerLeft,
    Icon, Text, ItemTitleText
} from './styles';

import tree from "app/assets/imgs/home/tree.png"
import key from "app/assets/imgs/home/key.png"
import bell from "app/assets/imgs/home/bell.png"
import graph from "app/assets/imgs/home/graph.png"
import NavBarContainer from '../@containers/NavBar/NavBarContainer';
import FooterContainer from '../@containers/Footer/FooterContainer';

function HomePage() {
    return (
        <>
            <NavBarContainer />

            <ItemWrapper style={{ display: "none" }}>
                <ItemTitleText>Oops! Under construction </ItemTitleText>
            </ItemWrapper>
            <ItemWrapper style={{ display: "none" }}>
                <Text>This page is under construction</Text>
            </ItemWrapper>

            <ContentWrapper style={{ marginTop: 150 + "px" }}>
                <ItemWrapper>
                    <Icon src={tree} roundedCircle />
                    <ItemTextContainerLeft>
                        <ItemTitleText>Multiple sites</ItemTitleText>
                        <Text>The app was developed and tested only on version 5.4, compatibility with older versions is not guaranteed</Text>
                    </ItemTextContainerLeft>
                </ItemWrapper>

                <ItemWrapper>
                    <ItemTextContainerRight>
                        <ItemTitleText>API tokns</ItemTitleText>
                        <Text>
                            API tokens are supported while you can still use the old user and password method
                        </Text>
                    </ItemTextContainerRight>
                    <Icon src={key} roundedCircle />
                </ItemWrapper>

                <ItemWrapper>
                    <Icon src={bell} roundedCircle />
                    <ItemTextContainerLeft>
                        <ItemTitleText>Notifications</ItemTitleText>
                        <Text>Choose the severity level and get notified when a new problem is generated</Text>
                    </ItemTextContainerLeft>
                </ItemWrapper>

                <ItemWrapper>
                    <ItemTextContainerRight>
                        <ItemTitleText>Graphs</ItemTitleText>
                        <Text>
                            Minute by minute graphs
                        </Text>
                    </ItemTextContainerRight>
                    <Icon src={graph} roundedCircle />
                </ItemWrapper>
            </ContentWrapper>

            <FooterContainer />
        </>
    );
}

export default HomePage;
