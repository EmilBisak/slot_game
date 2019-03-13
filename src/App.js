import React, { Component, Fragment } from 'react';

import Spinner from './components/Spinner';
import WinSound from './components/WinSound';
import Paytable from './components/Paytable';
import './App.css'

const olivesImg = require("./assets/image/olives.jpg");
const apricotsImg = require("./assets/image/apricots.jpg");
const strawberriesImg = require("./assets/image/strawberries.jpg");
const grapesImg = require("./assets/image/grapes.jpg");
const cheriesImg = require("./assets/image/cheries.jpg");
const limesImg = require("./assets/image/limes.jpg");
const bananasImg = require("./assets/image/bananas.jpg");
const watermellonsImg = require("./assets/image/watermellons.jpg");
const cloversImg = require("./assets/image/clovers.jpg");
const diamondsImg = require("./assets/image/diamonds.jpg");
const backgroundImg = require("./assets/image/47.jpg")



export default class App extends Component {
  state = {
    slots: [],
    win: false,
    spinning: true,
    balance: 1000,
    winScore: 0,
    isModalOpen: false
  }




  reset = () => {
    if (this.betInput.value > this.state.balance) this.betInput.value = this.state.balance;

    if (this.state.balance <= 0) {
      this.setState({ balance: 0, msg: "Game Over" })
    } else {

      this.setState({
        slots: [],
        win: false,
        spinning: true,
        balance: this.state.balance - this.betInput.value,
        winScore: 0
      });
      this.spinner1.reset();
      this.spinner2.reset();
      this.spinner3.reset(80);
      this.spinner1.resetAnimation();
      this.spinner2.resetAnimation();
      this.spinner3.resetAnimation();
    }
  }

  checkWin = num => {
    const { slots } = this.state;
    slots.push(num);
    if (slots.length < 3) return this.setState({ msg: "Better luck next time" })
    this.setState({
      spinning: false,
      win: slots[0] === slots[1] || slots[0] === slots[2] || slots[1] === slots[2]
    });
    this.compareSymbols();
    if (slots[0] === slots[1]) {
      this.spinner1.animateWin()
      this.spinner2.animateWin()
    }
    if (slots[0] === slots[2]) {
      this.spinner1.animateWin()
      this.spinner3.animateWin()
    }
    if (slots[1] === slots[2]) {
      this.spinner2.animateWin()
      this.spinner3.animateWin()
    }
  }

  compareSymbols = () => {
    const { balance, slots } = this.state;
    let bet = this.betInput.value;

    let body = document.querySelector("body");

    if (this.indexesOf(slots, -1650).length === 2) {
      this.setState({
        msg: `2 olives, you won ${bet * 2}$`,
        balance: balance + (bet * 2),
        winScore: bet * 2
      })
    } else if (this.indexesOf(slots, -1650).length === 3) {
      this.setState({
        msg: `3 olives, you won ${bet * 10}$`,
        balance: balance + (bet * 10),
        winScore: bet * 10
      });
      body.style.backgroundImage = `url(${olivesImg})`;
    } else if (this.indexesOf(slots, -0).length === 2) {
      this.setState({
        msg: `2 apricots, you won ${bet * 2}$`,
        balance: balance + (bet * 2),
        winScore: bet * 2
      })
    } else if (this.indexesOf(slots, -0).length === 3) {
      this.setState({
        msg: `3 apricots, you won ${bet * 10}$`,
        balance: balance + (bet * 10),
        winScore: bet * 10
      })
      body.style.backgroundImage = `url(${apricotsImg})`;
    } else if (this.indexesOf(slots, -150).length === 2) {
      this.setState({
        msg: `2 strawberries, you won ${bet * 2}$`,
        balance: balance + (bet * 2),
        winScore: bet * 2
      })
    } else if (this.indexesOf(slots, -150).length === 3) {
      this.setState({
        msg: `3 strawberries, you won ${bet * 12}$`,
        balance: balance + (bet * 12),
        winScore: bet * 12
      })
      body.style.backgroundImage = `url(${strawberriesImg})`;
    } else if (this.indexesOf(slots, -300).length === 2) {
      this.setState({
        msg: `2 grapes, you won ${bet * 3}$`,
        balance: balance + (bet * 3),
        winScore: bet * 3
      })
    } else if (this.indexesOf(slots, -300).length === 3) {
      this.setState({
        msg: `3 grapes, you won ${bet * 15}$`,
        balance: balance + (bet * 15),
        winScore: bet * 15
      })
      body.style.backgroundImage = `url(${grapesImg})`;
    } else if (this.indexesOf(slots, -450).length === 2) {
      this.setState({
        msg: `2 apples, you won ${bet * 3}$`,
        balance: balance + (bet * 3),
        winScore: bet * 3
      })
    } else if (this.indexesOf(slots, -450).length === 3) {
      this.setState({
        msg: `3 apples, you won ${bet * 15}$`,
        balance: balance + (bet * 15),
        winScore: bet * 15
      })
      body.style.backgroundImage = `url(${apricotsImg})`;
    } else if (this.indexesOf(slots, -600).length === 2) {
      this.setState({
        msg: `2 oranges, you won ${bet * 3}$`,
        balance: balance + (bet * 3),
        winScore: bet * 3
      })
    } else if (this.indexesOf(slots, -600).length === 3) {
      this.setState({
        msg: `3 oranges, you won ${bet * 20}$`,
        balance: balance + (bet * 20),
        winScore: bet * 20
      })
      body.style.backgroundImage = `url(${apricotsImg})`;
    } else if (this.indexesOf(slots, -750).length === 2) {
      this.setState({
        msg: `2 cherries, you won ${bet * 4}$`,
        balance: balance + (bet * 4),
        winScore: bet * 4
      })
    } else if (this.indexesOf(slots, -750).length === 3) {
      this.setState({
        msg: `3 cherres, you won ${bet * 20}$`,
        balance: balance + (bet * 20),
        winScore: bet * 20
      })
      body.style.backgroundImage = `url(${cheriesImg})`;
    } else if (this.indexesOf(slots, -900).length === 2) {
      this.setState({
        msg: `2 limes, you won ${bet * 4}$`,
        balance: balance + (bet * 4),
        winScore: bet * 4
      })
    } else if (this.indexesOf(slots, -900).length === 3) {
      this.setState({
        msg: `3 limes, you won ${bet * 25}$`,
        balance: balance + (bet * 25),
        winScore: bet * 25
      })
      body.style.backgroundImage = `url(${limesImg})`;
    } else if (this.indexesOf(slots, -1050).length === 2) {
      this.setState({
        msg: `2 bananas, you won ${bet * 5}$`,
        balance: balance + (bet * 5),
        winScore: bet * 5
      })
    } else if (this.indexesOf(slots, -1050).length === 3) {
      this.setState({
        msg: `3 bananas, you won ${bet * 30}$`,
        balance: balance + (bet * 30),
        winScore: bet * 30
      })
      body.style.backgroundImage = `url(${bananasImg})`;
    } else if (this.indexesOf(slots, -1200).length === 2) {
      this.setState({
        msg: `2 watermelons, you won ${bet * 5}$`,
        balance: balance + (bet * 5),
        winScore: bet * 5
      })
    } else if (this.indexesOf(slots, -1200).length === 3) {
      this.setState({
        msg: `3 watermelons, you won ${bet * 30}$`,
        balance: balance + (bet * 30),
        winScore: bet * 30
      })
      body.style.backgroundImage = `url(${watermellonsImg})`;
    } else if (this.indexesOf(slots, -1350).length === 2) {
      this.setState({
        msg: `2 clovers, you won ${bet * 10}$`,
        balance: balance + (bet * 10),
        winScore: bet * 10
      })
    } else if (this.indexesOf(slots, -1350).length === 3) {
      this.setState({
        msg: `3 clovers, you won ${bet * 100}$`,
        balance: balance + (bet * 100),
        winScore: bet * 100
      })
      body.style.backgroundImage = `url(${cloversImg})`;
    } else if (this.indexesOf(slots, -1500).length === 2) {
      this.setState({
        msg: `2 diamonds, you won ${bet * 15}$`,
        balance: balance + (bet * 15),
        winScore: bet * 15
      })
    } else if (this.indexesOf(slots, -1500).length === 3) {
      this.setState({
        msg: `3 diamonds, you won ${bet * 120}$`,
        balance: balance + (bet * 120),
        winScore: bet * 120
      })
      body.style.backgroundImage = `url(${diamondsImg})`;
    } else {
      body.style.backgroundImage = `url(${backgroundImg})`;
    }
  }

  indexesOf = (arr, target) => {
    let arr2 = []
    arr.map(function (el) { return (el === target) ? arr2.push(el) : null; })
      .filter(function (x) { return x !== null; });

    return arr2
  }

  decreaseBet = () => {
    this.betInput.value > 1 && this.betInput.value--;
  }

  increaseBet = () => {
    this.betInput.value < 100 && this.betInput.value++;
  }

  checkMinMax = () => {
    if (parseInt(this.betInput.value) === 0) {
      this.setState({ msg: "The minimum bet is 1", stopGame: true });
    } else {
      this.setState({ stopGame: false });
    }
    if (this.betInput.value < 0) this.betInput.value = 1;
    if (this.betInput.value > 100) this.betInput.value = 100;
  }

  betMax = () => {
    this.betInput.value = 100;
  }

  openModal = () => {
    this.setState({ isModalOpen: true })
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  render() {
    const { win, spinning, balance, winScore, msg, stopGame, isModalOpen } = this.state;
    return (
      <Fragment>
        <div className="spinner-wrapper">
        <button onClick={this.openModal} className="info-btn">Info</button>
          <h1>{spinning ? 'Waiting…' : msg}</h1>
          <div className="spinner-container">
            <Spinner onFinish={this.checkWin} ref={spinner => { this.spinner1 = spinner; }} timer="1000" />
            <Spinner onFinish={this.checkWin} ref={spinner => { this.spinner2 = spinner; }} timer="1400" />
            <Spinner onFinish={this.checkWin} ref={spinner => { this.spinner3 = spinner; }} timer="2200" />
          </div>
          <div className="controls-holder">
            <div className="balance-wrapper">
              <span className="balance">{balance}</span>
              <span className="balance-name">balance</span>
            </div>
            <div className="win-wrapper">
              <span className="win">{winScore}</span>
              <span className="win-name">win</span>
            </div>

            <div className="bet-wrapper">
              <span className="bet-spans" onClick={this.decreaseBet}>-</span>
              <input id="betInput" type="number" className="bet-input" placeholder="BET" ref={betInput => this.betInput = betInput} defaultValue="1" onChange={this.checkMinMax} />
              <span className="bet-spans" onClick={this.increaseBet}>+</span>
              <label htmlFor="betInput">bet</label>
            </div>
            <button className="bet-max-btn" onClick={this.betMax}>Bet Max</button>
            <button className="spin-btn" onClick={spinning || stopGame ? null : this.reset}>SPIN</button>
          </div>
        </div>
        {isModalOpen && <Paytable closeModal={this.closeModal}/>}
        {win && <WinSound play={win} />}
      </Fragment>
    );
  }
}