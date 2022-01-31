import React from 'react';

import FooterContainer from 'app/pages/@containers/Footer/FooterContainer';
import DocsNavBarContainer from 'app/pages/@containers/DocsNavBar/DocsNavBar';

import { Content } from './styles';

function AddingSitesPage() {

    return (
        <>
            <DocsNavBarContainer />
            <Content>
                <p style={{ color: 'red' }}>AddingSitesPage</p>
            </Content>
            <FooterContainer />
        </>
    );
}

export default AddingSitesPage;