import React, { Component } from 'react';

import './Spinner.css';

export default class Spinner extends Component {

    state = {
        position: 0,
        step: 50,
        iconHeight: 150,
        offsetTop: 10
    }

    componentDidMount() {
        this.reset();
    }

    reset = () => {
        let random = this.getRandPosition() + this.state.offsetTop;
        
        if (this.timer) clearInterval(this.timer);
        if (this.props.timer === "2200") random += 20;
        if (this.props.timer === "1400") random += 10;
        this.setState({
            position: random,
            startPosition: random,
            timeRemaining: this.props.timer
        });

        this.timer = setInterval(this.update, this.state.step);
    }

    getRandPosition() {
        return Math.floor(Math.random() * 12) * -this.state.iconHeight;
    }

    moveSpinner() {
        const { position, iconHeight, timeRemaining, step } = this.state;
        this.setState({
            position: position - iconHeight,
            timeRemaining: timeRemaining - step
        })
    }

    sendPosition() {
        const { iconHeight, step, startPosition } = this.state;
        const totalSymbols = 12;
        const minPosition = -iconHeight * (totalSymbols - 1);
        const moved = this.props.timer / step;
        let currentPosition = startPosition;

        for (let i = 0; i < moved; i++) {
            currentPosition -= iconHeight;
            if (currentPosition < minPosition) currentPosition = 0;
        }
        this.props.onFinish(currentPosition);
    }

    update = () => {
        if (this.state.timeRemaining <= 0) {
            clearInterval(this.timer);
            this.sendPosition();
        } else {
            this.moveSpinner();
        }
    }

    animateWin = () => {
        if (this.spinner) this.spinner.style.animationName = "win";
    }
    resetAnimation = () => {
        if (this.spinner) this.spinner.style.animationName = "";
    }

    render() {
        return (
            <div className="spinner-holder">
                <div
                    style={{ backgroundPositionY: this.state.position + 'px' }}
                    className={`spinner`}
                    ref={spinner => this.spinner = spinner}
                >
                    <div className="gradient-fade"></div>
                </div>
            </div>
        )
    }
}