import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { AccountTree, Key, Notifications, BarChart } from '@mui/icons-material';

import {
    ContentWrapper, CarouselImage,
    ItemWrapper, ItemText,
    ItemTitleText,
    ItemTextContainerRight, ItemTextContainerLeft,
    Circle, CircleInner, CircleWrapper, CircleContent,
} from './styles';

import a from "app/assets/imgs/home/1.png"
import b from "app/assets/imgs/home/2.png"
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
                    <CustomCircle>
                        <AccountTree sx={iconSx} />
                    </CustomCircle>
                    <ItemTextContainerLeft>
                        <ItemTitleText>Multiple sites</ItemTitleText>
                        <ItemText>The app was developed and tested only on version 5.4, compatibility with older versions is not guaranteed</ItemText>
                    </ItemTextContainerLeft>
                </ItemWrapper>

                <ItemWrapper>
                    <ItemTextContainerRight>
                        <ItemTitleText>API tokns</ItemTitleText>
                        <ItemText>
                            API tokens are supported while you can still use the old user and password method
                        </ItemText>
                    </ItemTextContainerRight>
                    <CustomCircle>
                        <Key sx={iconSx} />
                    </CustomCircle>
                </ItemWrapper>

                <ItemWrapper>
                    <CustomCircle>
                        <Notifications sx={iconSx} />
                    </CustomCircle>
                    <ItemTextContainerLeft>
                        <ItemTitleText>Notifications</ItemTitleText>
                        <ItemText>Choose the severity level and get notified when a new problem is generated</ItemText>
                    </ItemTextContainerLeft>
                </ItemWrapper>

                <ItemWrapper>
                    <ItemTextContainerRight>
                        <ItemTitleText>Graphs</ItemTitleText>
                        <ItemText>
                            Minute by minute graphs
                        </ItemText>
                    </ItemTextContainerRight>
                    <CustomCircle>
                        <BarChart sx={iconSx} />
                    </CustomCircle>
                </ItemWrapper>
            </ContentWrapper>

            <FooterContainer />
        </>
    );
}

function CustomCircle({ children }: any) {
    return (
        <Circle>
            <CircleInner>
                <CircleWrapper>
                    <CircleContent>
                        {children}
                    </CircleContent>
                </CircleWrapper>
            </CircleInner>
        </Circle>
    );
}

const iconSx = {
    color: darkTheme.pages.home.icon,
    width: 9 + 'vw',
    height: 9 + 'vh',
};

export default HomePage;
