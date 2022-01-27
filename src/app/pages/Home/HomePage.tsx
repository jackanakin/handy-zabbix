import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import {
    ContentWrapper, CarouselImage,
    ItemWrapper,
    ItemTextContainerRight, ItemTextContainerLeft,
    Icon, Text, ItemTitleText
} from './styles';

import a from "app/assets/imgs/home/1.png"
import b from "app/assets/imgs/home/2.png"
import tree from "app/assets/imgs/home/tree.png"
import key from "app/assets/imgs/home/key.png"
import bell from "app/assets/imgs/home/bell.png"
import graph from "app/assets/imgs/home/graph.png"
import { darkTheme } from 'app/themes/themes/darkTheme';
import NavBarContainer from '../@containers/NavBar/NavBarContainer';
import FooterContainer from '../@containers/Footer/FooterContainer';

function HomePage() {
    return (
        <>
            <NavBarContainer />
            <Carousel>
                <Carousel.Item>
                    <CarouselImage
                        src={a}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage
                        src={b}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage
                        src={a}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <ContentWrapper>
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
