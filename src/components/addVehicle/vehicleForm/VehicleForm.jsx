import React from 'react';

const VehicleForm=({ vehicleName, setVehicleName, initialX, setInitialX, initialY, setInitialY, speed, setSpeed, direction, setDirection }) => {
    return (
        <div className='input-container'>
            <div>
                <label>Vehicle Name</label>
                <input type="text" value={vehicleName} onChange={(e) => setVehicleName(e.target.value)} />
            </div>
            &nbsp;&nbsp;&nbsp;
            <div>
                <label>Position X</label>
                <input type="number" value={initialX} onChange={(e) => setInitialX(Number(e.target.value))} />
            </div>
            <div>
                <label>Position Y</label>
                <input type="number" value={initialY} onChange={(e) => setInitialY(Number(e.target.value))} />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
                <label>Speed</label>
                <input type="number" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
            </div>
            &nbsp;&nbsp;&nbsp;
            <div style={{ width: "13rem" }}>
                <label>Direction</label>
                <select className='vehicle-select' value={direction} onChange={(e) => setDirection(e.target.value)}>
                    <option value="Towards">Towards</option>
                    <option value="Backwards">Backwards</option>
                    <option value="Upwards">Upwards</option>
                    <option value="Downwards">Downwards</option>
                </select>
            </div>
        </div>
    );
};

export default VehicleForm;
