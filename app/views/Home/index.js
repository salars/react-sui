import React from 'react';
import Container from 'react-sui/Container';
import themeStore from 'react-sui/store/theme';
import {Button, ButtonGroup} from 'react-sui/Button';
import Section from 'react-sui/Section';
import Panel from 'react-sui/Panel';
import Row from 'react-sui/Row';
export default class Home extends React.Component {
    state = {
        fluid: false
    };

    render() {
        return (
            <Container fluid={ this.state.fluid }>
                <Row>
                    <Panel title="THEME">
                        <ButtonGroup>
                            <Button onClick={ _ => {
                                themeStore.current = "default";
                            }} label="Default Theme" type="primary"/>
                            <Button onClick={ _ => {
                                themeStore.current = "custom";
                            }} label="Black Theme" type="primary"/>
                        </ButtonGroup>
                    </Panel>
                </Row>
                <Row>
                    <Panel title="CONTAINER">
                        <ButtonGroup>
                            <Button onClick={
                                _ => {
                                    this.setState({fluid: true});
                                }
                            } label="Fluid Container" type="primary"/>
                            <Button onClick={
                                _ => {
                                    this.setState({fluid: false});
                                }
                            } label="Fixed Width Container" type="primary"/>
                        </ButtonGroup>
                    </Panel>
                </Row>
                <Row>
                    <Panel title="BUTTONS">
                        <Section title="Button Theme">
                            <ButtonGroup>
                                <Button onClick={ _ => {
                                } }
                                        label="Primary" type="primary"/>
                                <Button onClick={ _ => {
                                }} label="Warning" type="warning"/>
                                <Button onClick={ _ => {
                                }} label="Success" type="success"/>
                                <Button onClick={ _ => {
                                }} label="Danger" type="danger"/>
                                <Button onClick={ _ => {
                                }} label="Info" type="info"/>
                            </ButtonGroup>
                        </Section>
                        <Section title="Button Size">
                            <ButtonGroup>
                                <Button onClick={ _ => {
                                } }
                                        label="Large" type="primary" size="lg"/>
                                <Button onClick={ _ => {
                                }} label="Normal" type="primary"/>
                                <Button onClick={ _ => {
                                }} label="Small" type="primary" size="sm"/>
                            </ButtonGroup>
                        </Section>
                    </Panel>
                </Row>
            </Container>
        )
    }
}
