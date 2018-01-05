import React, { Component } from 'react';
import Monkey from './Monkey';
import monkeyInfo from '../monkey-info.json';
import styled, { keyframes } from 'styled-components';



const shuffle = (monkeyArray) => {
  let currentIndex = monkeyArray.length,
    temporaryValue,
    randomIndex;

  console.log('shuffle call');

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = monkeyArray[currentIndex];
    monkeyArray[currentIndex] = monkeyArray[randomIndex];
    monkeyArray[randomIndex] = temporaryValue;
  }

  return monkeyArray;
};
class Gamearea extends Component {
  constructor() {
    super();
    // this.isClicked = this.isClicked.bind(this);
  }

// scoreFunction = () => {
//   let score = 0;
//   this.props.scoreCb(score);
// }
  state = {
    monkeys: monkeyInfo,
    counter: 0,
  }

  isClicked = (key) => {

    const monkeys = {...this.state.monkeys};
    const gamestatus = monkeys[key].status;
    if (gamestatus !== false) {


      score = 0;
      this.props.scoreCb(score);
      this.props.gameMessage('You guessed poorly 😭');
      for (let i = 0; i <= 11; i++) {
        monkeys[i].status = false;
      }

    } else {

    this.props.gameMessage('You guessed AWESOMELY!! 👏');
    monkeys[key].status = score++;
    this.props.scoreCb(score);
    }
    this.forceUpdate();
  }
  render() {
    return (
      <ul className="monkeygrid">
      {
      Object.keys(shuffle(this.state.monkeys))
            .map(key => <Monkey key={key} index={key} details={this.state.monkeys[key]} isClicked={this.isClicked} score={score}/> )
      }
      </ul>
    )
  }
}

let score = 0;

export default Gamearea;