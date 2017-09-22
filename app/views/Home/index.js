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
import DataTable from 'react-sui/DataTable';
import Pagination from 'react-sui/Pagination';
import Badges from 'react-sui/Badges';
import CheckBox from 'react-sui/CheckBox';

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
        fluid: false,
        current: 1,
        checked:false
    };

    render() {
        return (
            <Container fluid={this.state.fluid}>
                <Row gutter>
                    <Col md="12">
                        <Panel title="BreadCrumbs">
                            <Section title="BreadCrumb single">
                                <BreadCrumb pathInfo={[
                                    {content: 'label'}
                                ]}/>
                            </Section>
                            <Section title="BreadCrumbs">
                                <BreadCrumb pathInfo={[
                                    {content: 'label1', url: 'www.baidu.com'},
                                    {content: 'label2'}
                                ]}/>
                                <BreadCrumb pathInfo={[
                                    {content: 'label1', url: 'www.baidu.com'},
                                    {content: 'label2', url: 'www.baidu.com'},
                                    {content: 'label3'}
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
                <Row>
                    <Col md="12">
                        <Panel title="DataTable">
                            <DataTable
                                select
                                selectAllButton
                                url="user/list"
                                config={{
                                    pageLength: 10
                                }}
                                buttons={[
                                    {label: '按钮1',callback: (res)=>{ console.log(res) } },
                                    {label: '按钮2',callback: (res)=>{ console.log(res) } }
                                ]}
                                columns={[
                                    { label: 'id',value:'id' },
                                    { label: '姓名',value:'name',render: (data,row)=>{ return <a>{data+row.nickName}</a>} },
                                    { label: '昵称',value:'nickName' },
                                    { label: '手机号',value:'tel' },
                                ]}
                            />
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Panel title="Pagination">
                            <Pagination total="103" previousText="上一页" nextText="下一页" goFirstText="首页" goLastText="尾页" current={ this.state.current } change={ (index)=>{this.setState({current:index});console.log(index)}}/>
                        </Panel>
                    </Col>
                </Row>
                <Row gutter>
                    <Col md="12">
                        <Panel title="CheckBox">
                            <Section title="CheckBox">
                                <CheckBox text="嘿嘿嘿" fnClick={(name,checked)=>{this.setState({checked})}} name='1' checked={this.state.checked}/>
                            </Section>
                        </Panel>
                    </Col>
                </Row>
            </Container>
        )
    }
}
