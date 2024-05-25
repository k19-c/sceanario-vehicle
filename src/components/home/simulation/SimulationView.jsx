import React from 'react';

const SimulationView = ({ vehicles }) => {
    return (
        <>
            <div className="simulation-container">
                {vehicles.map(vehicle => (
                    <div
                        key={vehicle.id}
                        className="vehicle"
                        style={{ left: `${vehicle.initialX/8}%`, top: `${vehicle.initialY/6}%` }}
                    >
                        {vehicle.id}
                    </div>
                ))}
            </div>
        </>
    );
};

export default SimulationView;
