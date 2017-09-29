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
import {DataTable, DataTableContainer} from 'react-sui/DataTable';
import Pagination from 'react-sui/Pagination';
import Badges from 'react-sui/Badges';
import CheckBox from 'react-sui/CheckBox';
import Radio from 'react-sui/Radio';
import Select from 'react-sui/Select';
import FileUpload from 'react-sui/FileUpload';

import Input from 'react-sui/Input';
import TextArea from 'react-sui/TextArea';
import Switch from 'react-sui/Switch';

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
        checked: false,
        switchStatus: false,
        current: 1,
        val: '',
        val1: '',
        val2: '',
        val3: ''
    };

    radioChange(name, value) {
        this.setState({val: value});
    }

    selectChange(name, value) {
        this.setState({val1: value});
        console.log(name, value);
    }

    inputChange(name, value) {
        this.setState({val2: value});
        console.log(name, value);
    }

    areaChange(name, value) {
        this.setState({val3: value});
        console.log(name, value);
    }

    setMyState(key, value) {
        console.log("setMyState");
        console.log(value);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("new state get: " + nextState.file);
    }

    render() {
        return (
            <div>
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
                                        {
                                            label: "option1", fnClick: () => {
                                            console.log("1")
                                        }
                                        },
                                        {
                                            label: "option2", disabled: true, fnClick: () => {
                                            console.log("2")
                                        }
                                        },
                                        {
                                            label: "option3", fnClick: () => {
                                            console.log("3")
                                        }
                                        },
                                    ]}/>
                                    <Dropdown label="primary" type="primary" options={[
                                        {label: "option1"},
                                        {label: "option2"},
                                        {label: "option3"},
                                    ]}/>
                                    <Dropdown label="warning" type="warning" size="sm" options={[
                                        {label: "option1"},
                                        {label: "option2"},
                                        {label: "option3"},
                                    ]}/>
                                </Section>
                                <Section title="direction split">
                                    <Dropdown label="Dropup" up split options={[
                                        {label: "option1"},
                                        {label: "option2"},
                                        {label: "option3"},
                                    ]}/>
                                    <Dropdown label="Dropdown right" right options={[
                                        {label: "option1"},
                                        {label: "option2"},
                                        {label: "option3"},
                                    ]}/>
                                </Section>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Panel title="DataTable">
                                <DataTableContainer>
                                    <div>filters...</div>
                                    <DataTable
                                        select
                                        selectAllButton
                                        url="user/list"
                                        config={{
                                            pageLength: 10,
                                        }}
                                        buttons={[
                                            {
                                                label: '按钮1', callback: (res) => {
                                                console.log(res)
                                            }
                                            },
                                            {
                                                label: '按钮2', callback: (res) => {
                                                console.log(res)
                                            }
                                            },
                                            {
                                                label: '按钮3', className: 'select-none-hide', callback: (res) => {
                                                console.log(res)
                                            }
                                            },
                                        ]}
                                        columns={[
                                            {label: 'id', value: 'id', sort: true},
                                            {
                                                label: '姓名', value: 'name', sort: true, render: (data, row) => {
                                                return <a>{data + row.nickName}</a>
                                            }
                                            },
                                            {label: '昵称', value: 'nickName', simpleInfo: true},
                                            {label: '手机号', value: 'tel'},
                                        ]}
                                    />
                                </DataTableContainer>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Panel title="Pagination">
                                <Pagination total="103" previousText="上一页" nextText="下一页" goFirstText="首页"
                                            goLastText="尾页" current={this.state.current} change={(index) => {
                                    this.setState({current: index});
                                    console.log(index)
                                }}
                                />
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
                                        {
                                            label: "option1", fnClick: () => {
                                            console.log("1")
                                        }
                                        },
                                        {
                                            label: "option2", disabled: true, fnClick: () => {
                                            console.log("2")
                                        }
                                        },
                                        {
                                            label: "option3", fnClick: () => {
                                            console.log("3")
                                        }
                                        },
                                    ]}/>
                                    <Dropdown label="primary" type="primary" iconName="list" options={[
                                        {label: "option1", iconName: 'bath'},
                                        {label: "option2", iconName: 'address-book-o'},
                                        {label: "option3", iconName: 'id-card-o'},
                                    ]}/>
                                    <Dropdown label="warning" type="warning" size="sm" options={[
                                        {label: "option1"},
                                        {label: "option2"},
                                        {label: "option3"},
                                    ]}/>
                                </Section>
                                <Section title="direction split">
                                    <Dropdown label="Dropup" up split options={[
                                        {label: "option1"},
                                        {label: "option2"},
                                        {label: "option3"},
                                    ]}/>
                                    <Dropdown label="Dropdown right" right options={[
                                        {label: "option1"},
                                        {label: "option2"},
                                        {label: "option3"},
                                    ]}/>
                                </Section>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Panel title="DataTable">
                                <DataTableContainer>
                                    <div>filters...</div>
                                    <DataTable
                                        select
                                        selectAllButton
                                        url="user/list"
                                        config={{
                                            pageLength: 10,
                                        }}
                                        buttons={[
                                            {
                                                label: '按钮1', iconName: 'edit', callback: (res) => {
                                                console.log(res)
                                            }
                                            },
                                            {
                                                label: '按钮2', iconName: 'send', callback: (res) => {
                                                console.log(res)
                                            }
                                            },
                                            {
                                                label: '按钮3', className: 'select-none-hide', callback: (res) => {
                                                console.log(res)
                                            }
                                            },
                                        ]}
                                        columns={[
                                            {label: 'id', value: 'id', sort: true},
                                            {
                                                label: '姓名', value: 'name', sort: true, render: (data, row) => {
                                                return <Button type="primary" label={data}/>
                                            }
                                            },
                                            {label: '昵称', value: 'nickName', simpleInfo: true},
                                            {label: '手机号', value: 'tel'},
                                        ]}
                                    />
                                </DataTableContainer>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Panel title="Pagination">
                                <Pagination total="103" previousText="上一页" nextText="下一页" goFirstText="首页"
                                            goLastText="尾页" current={this.state.current} change={(index) => {
                                    this.setState({current: index});
                                    console.log(index)
                                }}/>
                            </Panel>
                        </Col>
                    </Row>
                    <Row gutter>
                        <Col md="12">
                            <Panel title="CheckBox">
                                <Section title="CheckBox">
                                    <CheckBox text="嘿嘿嘿" fnClick={(name, checked) => {
                                        this.setState({checked})
                                    }} name='1' checked={this.state.checked}/>
                                </Section>
                            </Panel>
                        </Col>
                    </Row>
                    <Row gutter>
                        <Col md="12">
                            <Panel title="Radio">
                                <Section title="Radio">
                                    <Radio name="radio" value={this.state.val} change={(name, value) => {
                                        return this.radioChange(name, value)
                                    }} config={{
                                        options: [{value: 0, label: 'First Blood'}, {
                                            value: 1,
                                            label: 'Double Kill'
                                        }, {value: 2, label: 'Triple Kill'}, {
                                            value: 3,
                                            label: 'Quadra Kill'
                                        }, {value: 4, label: 'Penta Kill'}]
                                    }}/>
                                </Section>
                            </Panel>
                        </Col>
                    </Row>
                    <Row gutter>
                        <Col md="12">
                            <Panel title="CheckBox">
                                <Section title="CheckBox">
                                    <CheckBox text="嘿嘿嘿" fnClick={(name, checked) => {
                                        this.setState({checked})
                                    }} name='1' checked={this.state.checked}/>
                                </Section>
                            </Panel>
                        </Col>
                    </Row>
                    <Row gutter>
                        <Col md="12">
                            <Panel title="Radio">
                                <Section title="Radio">
                                    <Radio name="radio" value={this.state.val} change={(name, value) => {
                                        return this.radioChange(name, value)
                                    }} config={{
                                        options: [{value: 0, label: 'First Blood'}, {
                                            value: 1,
                                            label: 'Double Kill'
                                        }, {value: 2, label: 'Triple Kill'}, {
                                            value: 3,
                                            label: 'Quadra Kill'
                                        }, {value: 4, label: 'Penta Kill'}]
                                    }}/>
                                </Section>
                            </Panel>
                        </Col>
                    </Row>
                    <Row gutter>
                        <Col md="12">
                            <Panel title="Select">
                                <Section title="Select">
                                    <Select name="select" value={this.state.val1} change={(name, value) => {
                                        return this.selectChange(name, value)
                                    }} config={{
                                        placeholder: '全部',
                                        options: [{value: 0, label: '上网'}, {value: 1, label: '聊天'}, {
                                            value: 2,
                                            label: '打游戏'
                                        }, {value: 3, label: '谈恋爱'}]
                                    }}/>
                                </Section>
                            </Panel>
                        </Col>
                    </Row>
                    <Row gutter>
                        <Col md="12">
                            <Panel title="Input">
                                <Section title="Input">
                                    <Input name="ok" value={this.state.val2} change={(name, value) => {
                                        this.inputChange(name, value)
                                    }} placeholder="请选择" maxlength='8' min='1'/>
                                </Section>
                            </Panel>
                        </Col>
                    </Row>
                    <Row gutter>
                        <Col md="12">
                            <Panel title="TextArea">
                                <Section title="TextArea">
                                <TextArea name="textArea" value={this.state.val3} change={(name, value) => {
                                    this.areaChange(name, value)
                                }} maxlength='100' character/>
                            </Section>
                        </Panel>
                    </Col>
                </Row>
                    <Row>
                        <Col md="12">
                            <Panel title="FileUpload">
                                <Section title="FileUpload">
                                    <FileUpload text="" fileType={"image"} requirePath={false} change={(name, value) => {
                                        return this.setMyState(name, value)
                                    }} />
                                </Section>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Panel title="Switch">
                                <div>
                                    <label>开关：</label>
                                    <Switch name='switch' text={{checked:'开',unchecked:'关'}} value={ this.state.switchStatus } change={ (name,value)=>{console.log(name,value);this.setState({switchStatus:value})}}/>
                                    <Switch name='switch' text={{checked:'1',unchecked:'0'}} value={ this.state.switchStatus } change={ (name,value)=>this.setState({switchStatus:value})}/>
                                </div>
                            </Panel>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
