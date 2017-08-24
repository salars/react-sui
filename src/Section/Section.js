import React,{ Component} from 'react';
import { composeTheme } from '../helpers';

class Section extends Component {

    render(){
        const { title,t } = this.props;
        return (
            <div style={{marginBottom:t.GRID_GUTTER_HALF_WIDTH}}>
                {title?
                    <div style={{fontSize:t.FONT_SIZE_BASE,color:t.GRAY_LIGHT}}>{title}</div>
                    :
                    null
                }
                <div>
                {
                    this.props.children
                }
                </div>
            </div>
        )
    }
}

export default composeTheme(Section);