import React, { Component } from 'react';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import './css/style.css';
import Jumbotitle from './components/Jumbotitle';
import Gamearea from './components/Gamearea';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      topScore: 0,
      message: 'Click an image to begin!',
    }
  }

  setScore = (score) => {
    if (this.state.topScore < score) {
      this.setState({ score: score, topScore: score })
    }  else {
      this.setState({score})
    }
  }

  gameMessage = (message) => {
    if (this.state.score + 1 > 0) {
      this.setState({message})
    }
  }
  render(){
    return (
      <div className="main">
        <Topbar message={this.state.message} theScore={this.state.score} topScore={this.state.topScore} />
        <Jumbotitle />
        <Gamearea scoreCb={this.setScore} gameMessage={this.gameMessage}/>
        <Footer />
      </div>
    )
  }
};

export default App;