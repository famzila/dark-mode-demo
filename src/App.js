import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Board from './components/Board';
import GameContext from './contexts/GameContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null,
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <GameContext.Provider value={this.state}>
          <Board />
        </GameContext.Provider>
      </div>
    );
  }
}

export default App;
