import React, { Component } from 'react';
import Monkey from './Monkey';
import monkeyInfo from '../monkey-info.json';



const shuffle = (monkeyArray) => {
  let currentIndex = monkeyArray.length,
    temporaryValue,
    randomIndex;

  console.log('shuffle call');

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = monkeyArray[currentIndex];
    monkeyArray[currentIndex] = monkeyArray[randomIndex];
    monkeyArray[randomIndex] = temporaryValue;
  }

  return monkeyArray;
};
class Gamearea extends Component {
  constructor() {
    super();
  }

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