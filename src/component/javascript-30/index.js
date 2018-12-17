import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';

import DrumHits from './DrumHits';

class JavaScript30 extends Component {
    defaulTitle = 'Javascript 30';
    js30State = {
        title: ''
    }

    constructor(props) {
        super(props);
        this.state = this.js30State;
    }

    componentDidUpdate(prevProps, prevStates) {
        // console.clear();
        // console.log(prevProps, ' <<< >>> ', prevStates);
        const prevParams = new URLSearchParams(prevProps.location.search);
        const curParams = new URLSearchParams(this.props.location.search);
        let title = curParams.get('title') ? curParams.get('title') : this.defaulTitle;
        console.log('Did update  ', curParams.get('title'), );

        //check is important, otherwise you will fall into infinite loop
        if(prevParams.get('title') !== curParams.get('title')) {
            // console.log('update title sate here');
            if(title){
                console.log('title text', title)
                this.setState({
                    title
                })
            }
        }

    }
    componentDidMount() {
        let title = this.defaulTitle;
        if(title){
            this.setState({
                title
            })
        }
    }
    render() {

        return (
            <div>
                <h2>{this.state.title}</h2>

                {/* {`${JSON.stringify(this.props.match)} >>>> `} */}

                {/* <Link to={`${this.props.match.url}/drum-hits`}>Drum Hits</Link> */}

                <Route path={`${this.props.match.path}/:lesson`} component={DrumHits} />

                <Route
                    exact
                    path={this.props.match.path}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        )
    }
}
export default JavaScript30;