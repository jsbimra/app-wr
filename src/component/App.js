import {BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';

import Header from '../layout/Header';
import AppBody from '../layout/AppBody';
import Footer from '../layout/Footer';

const headerData = {
    slogan: 'Practise to Master!',
    logo: '//logo.clearbit.com/spotify.com?size=80&greyscale=true'
};

class App extends Component {
    render() {
        return (
            <Router>

                <div className="App">
                    <Header slogan={headerData.slogan} logo={headerData.logo}></Header>
                    <AppBody />
                    <Footer note="Thank you for visit." copyright="App's all right reserved with its Author."></Footer>

                </div>
            </Router>
        )
    }
}

export default App;