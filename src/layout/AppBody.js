import { Route } from 'react-router-dom';

import React, { Component } from 'react';

import {Home} from '../component/Home';
import {About} from '../component/About';
import Social from '../component/Social';
import {Feedback} from '../component/Feedback';

class AppBody extends Component {
    render() {
        return (
            <div className="app-body">
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/social" component={Social} />
                <Route exact path="/feedback" component={Feedback} />
            </div>
        )
    }
}

export default AppBody;