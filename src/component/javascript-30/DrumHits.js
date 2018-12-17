import React, { Component } from 'react'

import boom from './../../sounds/boom.wav';
import clap from './../../sounds/clap.wav';
import hihat from './../../sounds/hihat.wav';
import kick from './../../sounds/kick.wav';
import openhat from './../../sounds/openhat.wav';

import './DrumHits.css';

class DrumHits extends Component {
    // constructor(props) {
    //     super(props);

    // }

    buildKeysOnScreen() {
        const playingKeys = [
            {
                key: 'a',
                keyCode: 65,
                audioSrc: boom,
            },
            {
                key: 'S',
                keyCode: 83,
                audioSrc: clap,
            },
            {
                key: 'D',
                keyCode: 68,
                audioSrc: hihat,
            },
            {
                key: 'F',
                keyCode: 70,
                audioSrc: kick,
            },
            {
                key: 'G',
                keyCode: 71,
                audioSrc: openhat,
            }
        ];

        return playingKeys.map((data, i) => {
            return (
                <div className="key" key={i} data-key={data.keyCode}>
                    <audio data-key={data.keyCode} src={data.audioSrc}></audio>
                    <kbd>{data.key}</kbd>
                </div>)
        })
    }
    playsound(e) {
        console.log(e);
        // Bind keydown event 
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        // console.log(key, audio);
        if (!audio && !key) return;

        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }
    removeTransition(e) {
        if (e.propertyName !== 'transform') return;

        e.target.classList.remove('playing');
    }
    componentDidMount() {
        const allKeys = Array.from(document.querySelectorAll('.key'));
        allKeys.forEach(key => key.addEventListener('transitionend', this.removeTransition));
        window.addEventListener('keydown', this.playsound)
    }
    render() {

        return (
            <div className="keyWrapper">
                {this.buildKeysOnScreen()}
            </div>
        )
    }
}

export default DrumHits;