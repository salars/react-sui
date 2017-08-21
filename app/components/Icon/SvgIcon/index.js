import React from 'react';
import PropTypes from 'prop-types';
import icon from 'lib/icon';
export default class SvgIcon extends React.Component {
    render() {
        const {name, onClick, className} = this.props;
        const iconStr = icon[name];

        return (
            iconStr ?
            <svg className={"icon icon-svg "+( className ? className : "" )}
                 viewBox="0 0 24 24"
                 onClick={ _ => { onClick && onClick() } }
                 xmlns="http://www.w3.org/2000/svg"
            >
                <path d={ iconStr }/>
            </svg>
                :
                <div className="icon icon-svg">{ name }</div>
        )
    }
}

SvgIcon.props = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
};