import React, { Component } from 'react';
import ScoreCard from './components/ScoreCard';
import ActionButtons from './components/ActionButtons';
import './App.css';
import { connect } from 'react-redux';
import { selectRockPaperScissors, resetGame } from './store/actionCreators';
import { bindActionCreators } from 'redux';
import ReactHtmlParser from 'react-html-parser';
class App extends Component {
  render() {
    const { message, winner, userTotal, computerTotal, reset, handleSelection } = this.props;

    return (
      <div className="main-container">
        <h1>Rock Paper Scissors</h1>
        <h4>{ReactHtmlParser(message)}</h4>
        <ScoreCard
          totals={{ userTotal, computerTotal }}
        />
        <ActionButtons
          handleSelection={handleSelection}
          winner={winner}
        />
        <button className="btn-reset" onClick={() => reset()}>RESET</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userTotal: state.userTotal,
    computerTotal: state.computerTotal,
    message: state.message,
    winner: state.winner
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    handleSelection: selectRockPaperScissors,
    reset: resetGame
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);