import React,{ Component } from 'react';
import { composeTheme } from '../helpers';

class Row extends Component {
   render(){
       const { t } = this.props;
       return (
           <div style={{marginBottom:t.GRID_GUTTER_HALF_WIDTH}}>
               {
                   this.props.children
               }
           </div>
       )
   }
}
export default composeTheme(Row);