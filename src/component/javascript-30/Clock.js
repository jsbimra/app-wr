import React, { Component } from 'react'
import './Clock.css';

class Clock extends Component {
    // constructor(props) {
    //     super(props);

    // }
    composeTime(){
        const now = new Date();
        

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const secondHand = document.querySelector('.seconds-hand');
        if(!secondHand) return;
        
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
        const minsHand = document.querySelector('.mins-hand');
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;
        
        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
        const hoursHand = document.querySelector('.hours-hand');
        hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
       
    }
    componentDidMount() {
        this.composeTime();
        this.timeSet = setInterval(this.composeTime,1000);
    }
    componentDidUnMount() {
        clearInterval(this.timeSet);
    }
    render() {

        return (
            <div className="js30-wrapper">
                
                <div className="clock">
                    <div className="clock-face">
                        <div className="hand hours-hand"></div>
                        <div className="hand mins-hand"></div>
                        <div className="hand seconds-hand"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clock;