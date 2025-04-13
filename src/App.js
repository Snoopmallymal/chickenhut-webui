import React from 'react';
import BootstrapContainer from './BootstrapContainer'; // Ensure BootstrapContainer is a valid component
import './App.css'; // Ensure you have this CSS file
//import { EChartsGraph, gaugeChartOptions } from './Charts'; // Correctly import the chart components
import {UpdateTempGauge, UpdateHumidityGauge, UpdateTempGraph, UpdateHumidityGraph} from './Charts';

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
              <div className="tile-body-container">
                <p>"Pretty sure I heard someone say 'scrambled' earlier, Feeling a little nervous <i>#HatchingNotScrambling #BabyBirds</i>" -Egg #2</p>
              </div>
            </div>
          </BootstrapContainer>
        </BootstrapContainer>

        {/* Row 3 */}
        <BootstrapContainer className="row">
          {/* Tile 1 */}
          <BootstrapContainer className="col-md-6 mb-3">
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
          <BootstrapContainer className="col-md-6 mb-3">
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
          <BootstrapContainer className="col-md-6 mb-3">
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
          <BootstrapContainer className="col-md-6 mb-3">
            <div className="tile-content">
              <div className="tile-heading-container">
                <h2>Humidity Graph:</h2>
              </div>
              <div className="tile-body-container">
                <UpdateHumidityGraph />
              </div>
            </div>
          </BootstrapContainer>
        </BootstrapContainer>
      </main>
    </div>
  );
}

export default App;
