import React, {Component} from 'react';
import {composeTheme} from '../helpers';
import {autobind} from 'core-decorators';
import '../../app/css/normal.less';

@autobind
class DataTableContainer extends Component {
    globalEventHandler(e) {
        let node = this.refs.simpleInfoHandler;
        if (!e.path.includes(node)) {
            node.style.display = 'none';
        }
    }

    componentDidMount() {
        document.body.addEventListener('click', this.globalEventHandler);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.globalEventHandler);
    }

    render() {
        const {t} = this.props;
        return (
            <div className="data-table-container" style={{position: 'relative'}}>
                {
                    this.props.children
                }
                <div className="simple-info-container" ref="simpleInfoHandler" style={{
                    position: 'absolute',
                    background: t.PRIMARY_COLOR,
                    color: t.WHITE,
                    borderRadius: '.15rem',
                    padding: '.5rem',
                    maxWidth: '20rem',
                    wordBreak: 'break-all',
                    display: 'none'
                }}> </div>
            </div>
        )
    }
}

export default composeTheme(DataTableContainer);
