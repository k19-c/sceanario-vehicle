import React from 'react';

const ScenarioActions=({ history }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div><h2>All Scenarios</h2></div>
            <div>
                <button 
                   onClick={() => history.push(`/add-scenario`)} 
                   style={{ background: "#00c04b", marginRight: "15px" }}>
                    New Scenario
                </button>
                <button style={{ background: "#77c3ec", marginRight: "15px" }}>Add Vehicle</button>
                <button style={{ background: "orange" }}>Delete All</button>
            </div>
        </div>
    );
};

export default ScenarioActions;
