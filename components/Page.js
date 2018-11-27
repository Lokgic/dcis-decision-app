import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeProvider } from 'styled-components';
import { MainContainer, GlobalStyle,theme, Header } from '../style/PageSC';
import Meta from './Meta';


class Page extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>

                <MainContainer>
                <Meta/>
                <GlobalStyle/>
                <Header>
                <div id="menu-icon">
                <FontAwesomeIcon icon="bars" className = "bar" />
                </div>
                    <h1>DCIS Decision App</h1>
                    </Header>
                    {this.props.children}

                </MainContainer>
            </ThemeProvider>




        );
    }
}

export default Page;