import React, {Component} from 'react';
import themeStore  from '../store/theme';
import { observer } from 'mobx-react';
export const compose = ({t,...newProps}) => {
    return (BaseComponent) => {
        @observer
        class CompoundComponent extends Component {
            render() {
                const props = this.props;
                return <BaseComponent { ...props } { ...newProps } t={ t.theme } />;
            }
        }
        return CompoundComponent;
    };
};

export const composeTheme = compose({t: themeStore});

export const rem = (size)=>{
    return size+"rem";
};