import React from 'react';
import BootstrapContainer from './BootstrapContainer'; // Ensure BootstrapContainer is a valid component
import './App.css'; // Ensure you have this CSS file
import {UpdateTempGauge, UpdateHumidityGauge, UpdateTempGraph, UpdateHumidityGraph} from './Thecharts.js';
import HlsPlayer from './Livestream';
function App() {
  return (
    <div className="App">
      <main className="container mt-3">
        {/* Row 1 */}
        <BootstrapContainer className="row">
          <BootstrapContainer className="col-md-12">
            <div className="tile-content">
              <div className="tile-heading-container">
                <h1>The Chicken Hut</h1>
              </div>
            </div>
          </BootstrapContainer>
        </BootstrapContainer>

        {/* Row 2 */}
        <BootstrapContainer className="row">
          <BootstrapContainer className="col-md-12">
            <div className="tile-content">
              <div className="tile-heading-container">
                <h2>Quote of the Day:</h2>
              </div>
              <div className="tile-body-container" style={{border: "0px"}}>
                <p>"Just hatched, and already they're talking about dipping me in dye? Guess I'm in for a colorful experience... or maybe just a quick one. Happy Easter, I guess? <i>#FreshOutOfTheShell #DippedAndDone</i>" - Scrambled Egg</p>
              </div>
            </div>
          </BootstrapContainer>
        </BootstrapContainer>

        {/* Row 3 */}
        <BootstrapContainer className="row">
          {/* Tile 1 */}
          <BootstrapContainer className="col-md-6 mb-3 d-none">
            <div className="tile-content">
              <div className="tile-heading-container">
                <h2>Current Temperature:</h2>
              </div>
              <div className="tile-body-container">
              <UpdateTempGauge/>
              </div>
            </div>
          </BootstrapContainer>

          {/* Tile 2 */}
          <BootstrapContainer className="col-md-6 mb-3 d-none">
            <div className="tile-content">
              <div className="tile-heading-container">
                <h2>Current Humidity:</h2>
              </div>
              <div className="tile-body-container">
                <UpdateHumidityGauge />
              </div>
            </div>
          </BootstrapContainer>
          {/* Tile 3*/}
          <BootstrapContainer className="col-md-6 mb-3 d-none">
            <div className="tile-content">
              <div className="tile-heading-container">
                <h2>Temperature Graph:</h2>
              </div>
              <div className="tile-body-container">
                <UpdateTempGraph />
              </div>
            </div>
          </BootstrapContainer>
          {/* Tile 4*/}
          <BootstrapContainer className="col-md-6 mb-3 d-none">
            <div className="tile-content">
              <div className="tile-heading-container">
                <h2>Humidity Graph:</h2>
              </div>
              <div className="tile-body-container">
                <UpdateHumidityGraph />
              </div>
            </div>
          </BootstrapContainer>
          <BootstrapContainer className="col-md-12 mb-3">
            <div className="tile-content">
              <div className="tile-heading-container">
                <h2>Live Stream:</h2>
              </div>
              <div className="tile-body-container">
                <HlsPlayer streamUrl={'https://chickenhutcam.duckdns.org/live/stream.m3u8'} />
              </div>
            </div>
          </BootstrapContainer>
        </BootstrapContainer>
      </main>
    </div>
  );
}

export default App;
