import React from 'react';

const SimulationControls=({ startSimulation, stopSimulation, simulationRunning }) => {
    return (
        <div className='simulator-buttons'>
            <button
                style={{ background: "#77c3ec" }}
                className='simulator start'
                onClick={startSimulation}
                disabled={simulationRunning}
            >
                Start Simulation
            </button>
            <button
                className='simulator'
                style={{ background: "#00c04b" }}
                onClick={stopSimulation}
                disabled={!simulationRunning}
            >
                Stop Simulation
            </button>
        </div>
    );
};

export default SimulationControls;
