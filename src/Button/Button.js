import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,getColorByType } from '../helpers';
class Button extends Component {
    static props = {
        type: PropTypes.string,
        label:PropTypes.string,
        onClick:PropTypes.func
    };
    static defaultProps = {
        type:'default'
    };
    state = {
        isHover:false
    };
    getStyle(){
        const { type,t,size } = this.props;
        let themeColor = getColorByType(type,t);
        let fontColor = t.WHITE;
        let radius = t.BORDER_RADIUS;
        let fontSize = t.FONT_SIZE_BASE;
        let padding = `${t.PADDING_BASE_VERTICAL}px ${t.PADDING_BASE_HORIZONTAL}px`;
        if(size==="lg"){
            fontSize = t.FONT_SIZE_LARGE;
            padding = `${t.PADDING_LG_VERTICAL}px ${t.PADDING_LG_HORIZONTAL}px`;
        }else if(size === "sm"){
            fontSize= t.FONT_SIZE_SMALL;
            padding = `${t.PADDING_SM_VERTICAL}px ${t.PADDING_SM_HORIZONTAL}px`;
        }

        return {
            lineHeight:t.BUTTON_LINE_HEIGHT,
            padding:padding,
            //border:`${t.BORDER_WIDTH}px solid ${themeColor}`,
            border:"none",
            backgroundColor:themeColor,
            color:fontColor,
            borderRadius:radius,
            fontSize:fontSize,
            outline:t.OUTLINE,
            position:"relative",
            verticalAlign:"middle"
        };
    }
    render(){
        const { type,label,onClick,className,t } = this.props;
        const { isHover } = this.state;
        const style = this.getStyle();
        return (
            <button className={className } onClick={ onClick }
            style={ style} onMouseEnter={ _ => { this.setState({isHover:true})} }
                    onMouseLeave={ _ => { this.setState({isHover:false}) }}
            >
                {
                    isHover?
                        <div style={{
                            position:"absolute",
                            display:"inline-block",
                            top:0,
                            left:0,
                            background:t.WHITE,
                            height:'100%',
                            width:'100%',
                            opacity:".153"
                        }}></div>
                        :
                        null
                }
                { label }
            </button>
        )
    }
}

export default composeTheme(Button);