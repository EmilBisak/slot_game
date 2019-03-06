import React, { Component } from 'react';

import "./Paytable.css"

export default class Paytable extends Component {

  render() {

    return (
      <div className="base-game-holder">
        <div className="base-game-wrapper">
        <h2>Symbol Payout Values</h2>
          <button onClick={this.props.closeModal} className="close-modal-btn">X</button>
          <div className="base-game">
            <div className="symbol-holder">
              <img src="/image/symbols/olive.png" alt="symbol" />
              <p><span>2</span> X2</p>
              <p><span>3</span> X10</p>
            </div>
            <div className="symbol-holder">
              <img src="/image/symbols/apricot.png" alt="symbol" />
              <p><span>2</span> X2</p>
              <p><span>3</span> X10</p>
            </div>
            <div className="symbol-holder">
              <img src="/image/symbols/strawberry.png" alt="symbol" />
              <p><span>2</span> X2</p>
              <p><span>3</span> X12</p>
            </div>
            <div className="symbol-holder">
              <img src="/image/symbols/grape.png" alt="symbol" />
              <p><span>2</span> X3</p>
              <p><span>3</span> X15</p>
            </div>
            <div className="symbol-holder">
              <img src="/image/symbols/apple.png" alt="symbol" />
              <p><span>2</span> X3</p>
              <p><span>3</span> X15</p>
            </div>
            <div className="symbol-holder">
              <img src="/image/symbols/orange.png" alt="symbol" />
              <p><span>2</span> X3</p>
              <p><span>3</span> X20</p>
            </div>
            <div className="symbol-holder">
              <img src="/image/symbols/cherry.png" alt="symbol" />
              <p><span>2</span> X4</p>
              <p><span>3</span> X20</p>
            </div>
            <div className="symbol-holder">
              <img src="/image/symbols/lime.png" alt="symbol" />
              <p><span>2</span> X4</p>
              <p><span>3</span> X25</p>
            </div>
            <div className="symbol-holder">
              <img src="/image/symbols/banana.png" alt="symbol" />
              <p><span>2</span> X5</p>
              <p><span>3</span> X30</p>
            </div>
            <div className="symbol-holder">
              <img src="/image/symbols/watermelon.png" alt="symbol" />
              <p><span>2</span> X5</p>
              <p><span>3</span> X30</p>
            </div>
            <div className="symbol-holder">
              <img src="/image/symbols/clover.png" alt="symbol" />
              <p><span>2</span> X10</p>
              <p><span>3</span> X100</p>
            </div>
            <div className="symbol-holder">
              <img src="/image/symbols/diamond.png" alt="symbol" />
              <p><span>2</span> X15</p>
              <p><span>3</span> X120</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}