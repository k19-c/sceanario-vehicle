import React from 'react';

const ScenarioSelector=({ scenarios, selectedScenario, setSelectedScenario }) => {
    return (
        <div>
            <label>Scenario</label>
            <br />
            <select
                onChange={(e) => setSelectedScenario(scenarios.find(s => s.id===parseInt(e.target.value)))}
                value={selectedScenario? selectedScenario.id:''}
            >
                {scenarios.map(scenario => (
                    <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
                ))}
            </select>
        </div>
    );
};

export default ScenarioSelector;
