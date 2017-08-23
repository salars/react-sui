import React from 'react';
import SuiThemeProvider from 'react-sui/SuiThemeProvider';
import Container from 'react-sui/Container';
import themeStore from 'react-sui/store/theme';
import Button from 'react-sui/Button';
export default class Home extends React.Component {
    state = {
        fluid:false
    };
    render() {
        return (
               <SuiThemeProvider >
                   <Container fluid={ this.state.fluid }>
                       <Button  onClick={
                           _ => {
                               this.setState({fluid:!this.state.fluid});

                           }
                       } label="container toogle" />
                       <Button onClick={ _ => {
                           themeStore.current = "custom";
                       }} label="click" />
                   </Container>
               </SuiThemeProvider>
        )
    }
}
