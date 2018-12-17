import { Route } from 'react-router-dom';
import React, { Component } from 'react';

import {Home} from '../component/Home';
import Money from '../component/Money';
import Social from '../component/Social';
import JavaScript30 from '../component/javascript-30/index';

class AppBody extends Component {
    render() {
        return (
            <div className="app-body">
                <Route exact path="/" component={Home} />
                <Route exact path="/money" component={Money} />
                <Route exact path="/social" component={Social} />
                <Route  path="/javascript-30" component={JavaScript30} />
            </div>
        )
    }
}

export default AppBody;