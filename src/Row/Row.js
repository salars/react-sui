import React,{ Component } from 'react';

export default class Row extends Component {
   render(){
       return (
           <div>
               {
                   this.props.children
               }
           </div>
       )
   }
}