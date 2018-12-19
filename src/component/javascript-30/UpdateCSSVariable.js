import React, { Component } from 'react'
import './UpdateCSSVarable.css';

class Clock extends Component {
    // constructor(props) {
    //     super(props);

    // }
    handleCSSVariable() {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
    }
    componentDidMount() {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.addEventListener('input', this.handleCSSVariable));
        inputs.forEach(input => input.addEventListener('change', this.handleCSSVariable));
        // inputs.forEach(input => input.addEventListener('mousemove', this.handleCSSVariable));
    }
    render() {

        return (
            <div className="updatecssvar-wrapper">

                <div className="clearfix">
                    <label className="float-left">Spacing
                        <input name="spacing" data-sizing="px" type="range" min="10" max="200" defaultValue="10" />
                    </label>
                    <label className="float-left">Blur 
                        <input name="blur" data-sizing="px" type="range" min="0" max="25" defaultValue="10" />
                    </label>
                    <label className="float-left">Base color 
                        <input name="base" type="color" />
                    </label>
                </div>

                <h3>With JAVA<span className="hl">SCRIPT</span></h3>

                {/* <img src="https://i.imgur.com/YxdWcyG.jpg" alt="image" /> */}
                <video autoPlay muted loop>
                    <source src="//i.imgur.com/4WMV3HW.mp4" />
                </video>

            </div>
        )
    }
}

export default Clock;