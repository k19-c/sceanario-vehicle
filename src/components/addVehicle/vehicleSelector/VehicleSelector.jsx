import React from 'react';
import data from '../../../data.json'

const VehicleSelector = ({ selectedScenario, onScenarioChange }) => {
    return (
        <div style={{ width: "13rem" }}>
            <label>Scenario List</label>
            <br />
            <select className='vehicle-select' value={selectedScenario} onChange={onScenarioChange}>
                {data.scenarios.map(scenario => (
                    <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
                ))}
            </select>
        </div>
    );
};

export default VehicleSelector;
