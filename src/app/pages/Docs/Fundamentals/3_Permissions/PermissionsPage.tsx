import React from 'react';
import { Table } from 'react-bootstrap';

import FooterContainer from 'app/pages/@containers/Footer/FooterContainer';
import DocsNavBarContainer from 'app/pages/@containers/DocsNavBar/DocsNavBar';
import { Content } from './styles';
import { Title, SubTitle, Text } from '../../DocsStyles';
import TextLink from 'app/styled-components/TextLink';

import enabledApiImg from "app/assets/imgs/docs/zabbix_permissions/enabled_api.png";
import apiMethodsAllowListImg from "app/assets/imgs/docs/zabbix_permissions/api_methods_allow_list.png";

function PermissionsPage() {

    return (
        <>
            <DocsNavBarContainer />
            <Content>
                <Title>Zabbix API permissions</Title>
                <Text>This section of the documentation describes all you need to know about the required Zabbix API permissions</Text>

                <SubTitle>Where do I configure Zabbix API permissions ?</SubTitle>
                <Text>1. Using Zabbix frontend: Administration {"->"} User roles</Text>
                <Text>2. Open the role that contains the user, find "Access to API" and check the "Enabled" box</Text>
                <img width={500 + 'vw'} height={200 + 'vh'} src={enabledApiImg} alt='Enable API option' style={{ alignSelf: 'center' }} />
                <Text style={{ marginTop: 1 + 'vh' }}>3. You must also define the "API methods" that the user will have authorization, proceed to the next section to see required methods</Text>
                <img width={600 + 'vw'} height={150 + 'vh'} src={apiMethodsAllowListImg} alt='Enable API option' style={{ alignSelf: 'center' }} />
                <br />
                <Text style={{ marginTop: 1 + 'vh' }}>* "Access to UI elements" permissions relate to the frontend access, they are not required by Handy Zabbix</Text>

                <SubTitle>Functionality X API method required</SubTitle>
                <Text>You can check bellow the required API methods for each funcionality to work in Handy Zabbix, you can check out what each of the methods retrieve in <TextLink href='https://www.zabbix.com/documentation/current/en/manual/api/reference' >here</TextLink></Text>
                <Table striped bordered hover variant="dark" style={{ alignSelf: 'center' }}>
                    <thead>
                        <tr>
                            <th>Functionality</th>
                            <th>API methods</th>
                            <th>Read/Write</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>View current and history problems, receive notifications</td>
                            <td>problem.get, event.get</td>
                            <td>READ</td>
                        </tr>
                        <tr>
                            <td>View hosts and its detailed information</td>
                            <td>host.get, hostgroup.get</td>
                            <td>READ</td>
                        </tr>
                        <tr>
                            <td>View hosts graphs</td>
                            <td>host.get, settings.get, graph.get, graphitem.get, item.get, trend.get, history.get</td>
                            <td>READ</td>
                        </tr>
                    </tbody>
                </Table>

                <SubTitle>Notes</SubTitle>
                <Text>* "Access to UI elements" permissions relate to the frontend access, they are not required by Handy Zabbix</Text>


            </Content>
            <FooterContainer />
        </>
    );
}

export default PermissionsPage;