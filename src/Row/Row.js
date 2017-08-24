import React,{ Component } from 'react';
import { composeTheme } from '../helpers';

class Row extends Component {
   render(){
       const { t,gutter } = this.props;
       return (
           <div className="row" style={ { marginBottom: gutter ? t.GRID_GUTTER_HALF_WIDTH : 0} }>
               {
                   this.props.children
               }
           </div>
       )
   }
}
export default composeTheme(Row);