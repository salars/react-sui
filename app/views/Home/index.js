import React from 'react';
import Container from 'react-sui/Container';
import themeStore from 'react-sui/store/theme';
import {Button, ButtonGroup} from 'react-sui/Button';
import Dropdown from 'react-sui/Dropdown';
import Section from 'react-sui/Section';
import Panel from 'react-sui/Panel';
import Row from 'react-sui/Row';
import Col from 'react-sui/Col';
import BreadCrumb from 'react-sui/BreadCrumb';
import Badges from 'react-sui/Badges';

const ColorBlock = (props) => {
    return (
        <div style={{
            background: "#e2f2f0",
            height: "30px",
            textAlign: "center",
            lineHeight: "30px",
            fontSize: "16px"
        }}>{props.content}</div> )
};
export default class Home extends React.Component {
    state = {
        fluid: false
    };

    render() {
        return (
            <div>
            <Container fluid={this.state.fluid}>
                <Row gutter>
                    <Col md="12">
                        <Panel title="BreadCrumbs">
                            <Section title="BreadCrumb single">
                                <BreadCrumb pathInfo={[
                                    {content: 'dashabi'}
                                ]}/>
                            </Section>
                            <Section title="BreadCrumbs">
                                <BreadCrumb pathInfo={[
                                    {content: 'shabi', url: 'www.baidu.com'},
                                    {content: 'dashabi'}
                                ]}/>
                                <BreadCrumb pathInfo={[
                                    {content: 'shabi', url: 'www.baidu.com'},
                                    {content: 'shabi', url: 'www.baidu.com'},
                                    {content: 'dashabi'}
                                ]}/>
                            </Section>
                        </Panel>
                    </Col>
                </Row>
                <Row gutter>
                    <Col md="12">
                        <Panel title="Badges">
                            <Section>
                                <a href="#">inBox<Badges label="3"/></a>
                            </Section>
                            <Section>
                                <ButtonGroup>
                                    <Button onClick={_ => {
                                    }}
                                            label="Primary" type="primary">
                                        <Badges label="4"/>
                                    </Button>
                                </ButtonGroup>
                            </Section>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Panel title="Theme">
                            <ButtonGroup>
                                <Button onClick={_ => {
                                    themeStore.current = "default";
                                }} label="Default Theme" type="primary"/>
                                <Button onClick={_ => {
                                    themeStore.current = "custom";
                                }} label="Black Theme" type="primary"/>
                            </ButtonGroup>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Panel title="Container">
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
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Panel title="Buttons">
                            <Section title="Button Theme">
                                <ButtonGroup>
                                    <Button onClick={_ => {
                                    }}
                                            label="Primary" type="primary"/>
                                    <Button onClick={_ => {
                                    }} label="Warning" type="warning"/>
                                    <Button onClick={_ => {
                                    }} label="Success" type="success"/>
                                    <Button onClick={_ => {
                                    }} label="Danger" type="danger"/>
                                    <Button onClick={_ => {
                                    }} label="Info" type="info"/>
                                </ButtonGroup>
                            </Section>
                            <Section title="Button Size">
                                <p>
                                    <Button onClick={_ => {
                                    }}
                                            label="Large" type="primary"
                                            size="lg"/>
                                </p>
                                <p>
                                    <Button onClick={_ => {
                                    }} label="Normal" type="primary"/>
                                </p>
                                <p>
                                    <Button onClick={_ => {
                                    }} label="Small" type="primary" size="sm"/>
                                </p>
                                <p>
                                    <Button onClick={_ => {
                                    }} label="Extra Small" type="primary" size="xs"/>
                                </p>
                            </Section>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Panel title="Columns">
                            <Row showGrid>
                                <Col md="12">
                                    <ColorBlock content="col-12"/>
                                </Col>
                            </Row>
                            <Row showGrid>
                                <Col md="8">
                                    <ColorBlock content="col-8"/>
                                </Col>
                                <Col md="4">
                                    <ColorBlock content="col-4"/>
                                </Col>
                            </Row>
                            <Row showGrid>
                                <Col md="6">
                                    <ColorBlock content="col-6"/>
                                </Col>
                                <Col md="6">
                                    <ColorBlock content="col-6"/>
                                </Col>
                            </Row>
                            <Row showGrid>
                                <Col md="4">
                                    <ColorBlock content="col-4"/>
                                </Col>
                                <Col md="4">
                                    <ColorBlock content="col-4"/>
                                </Col>
                                <Col md="4">
                                    <ColorBlock content="col-4"/>
                                </Col>
                            </Row>
                        </Panel>
                    </Col>
                </Row>
                <Row gutter>
                    <Col sm="12">
                        <Panel title="Dropdown">
                            <Section title="Dropdown size type">
                                <Dropdown label="Dropdown" size="lg" options={[
                                    { label: "option1", fnClick: ()=>{console.log("1")} },
                                    { label: "option2",disabled:true, fnClick: ()=>{console.log("2")} },
                                    { label: "option3", fnClick: ()=>{console.log("3")} },
                                ]}/>
                                <Dropdown label="primary" type="primary" options={[
                                    { label: "option1" },
                                    { label: "option2" },
                                    { label: "option3" },
                                ]}/>
                                <Dropdown label="warning" type="warning" size="sm" options={[
                                    { label: "option1" },
                                    { label: "option2" },
                                    { label: "option3" },
                                ]}/>
                            </Section>
                            <Section title="direction split">
                                <Dropdown label="Dropup" up split options={[
                                    { label: "option1" },
                                    { label: "option2" },
                                    { label: "option3" },
                                ]}/>
                                <Dropdown label="Dropdown right" right options={[
                                    { label: "option1" },
                                    { label: "option2" },
                                    { label: "option3" },
                                ]}/>
                            </Section>
                        </Panel>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
