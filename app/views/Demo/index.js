import React from 'react';
import SuiThemeProvider  from 'react-sui/SuiThemeProvider';
console.log(SuiThemeProvider);
export default class Demo extends React.Component {
    render(){
        return (
            <SuiThemeProvider />
        )
    }
}