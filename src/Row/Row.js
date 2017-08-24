import React,{ Component } from 'react';
import { composeTheme } from '../helpers';
import PropTypes from 'prop-types';

class Row extends Component {
    static props = {
      showGrid:PropTypes.bool
    };
    static defaultProps = {
        showGrid:false
    };
   render(){
       const { showGrid } = this.props;
       return (
           <div className={`row ${showGrid ? " show-grid":""}`}>
               {
                   this.props.children
               }
           </div>
       )
   }
}
export default composeTheme(Row);