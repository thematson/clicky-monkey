import React, { Component } from 'react';
import Overdrive from 'react-overdrive';


class Monkey extends Component {
  render() {
    const { details, index } = this.props;
    return (
      <Overdrive id={details.id}>
      <li className="monkeyPics">
        <img src={details.image} alt={details.name} onClick={() => this.props.isClicked(index)}/>
      </li>
      </Overdrive>
    )
  }
}

export default Monkey;