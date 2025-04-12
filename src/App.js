import React from 'react';
import BootstrapContainer from './BootstrapContainer';
import './App.css'; // Make sure you have this

function App() {
  return (
    <div className="App">
      <main className="container mt-3">
        <BootstrapContainer className="row">
          <BootstrapContainer className="col-md-12">
            <div className='tile-content'>
              <div className='tile-heading-container'>
                <h1>The Chicken Hut</h1>
              </div>
            </div>
          </BootstrapContainer>
        </BootstrapContainer>
        <BootstrapContainer className="row">
          <BootstrapContainer className="col-md-12">
            <div className="tile-content">
              <div className="tile-heading-container">
                <h2>Latest Update:</h2>
              </div>
              <div className="tile-body-container">
                <p>Pretty sure I heard someone say 'scrambled' earlier. Feeling a little nervous. #HatchingNotScrambling #BabyBirds</p>
              </div>
            </div>
          </BootstrapContainer>
        </BootstrapContainer>
        <BootstrapContainer className="row">
          <BootstrapContainer className="col-md-6 mb-3">
            <div className="tile-content">
              <div className="tile-heading-container">
                <h2>Tile 1:</h2>
              </div>
              <div className="tile-body-container">
              <canvas id="humidity-chart"></canvas>
              </div>
            </div>
          </BootstrapContainer>
          <BootstrapContainer className="col-md-6 mb-3">
            <div className="tile-content">
              <div className="tile-heading-container">
                <h2>Tile 2:</h2>
              </div>
              <div className="tile-body-container">
                <canvas id="temp-chart"></canvas>
              </div>
            </div>
          </BootstrapContainer>
        </BootstrapContainer>
      </main>
    </div>
  );
}

export default App;