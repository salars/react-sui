import React, {Component} from 'react';
import {composeTheme} from '../helpers';
import PropTypes from 'prop-types';
import Container from '../Container';
class Panel extends Component {
    static props = {
        fluid: PropTypes.bool
    };
    static defaultProps = {
        fluid:false
    };
    render() {
        const {fluid} = this.props;
        return (
            <div className={`navbar `}>
                <Container fluid={ fluid }>
                    {
                        this.props.children
                    }
                </Container>
            </div>
        )
    }
}

export default composeTheme(Panel);