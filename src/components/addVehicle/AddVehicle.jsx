import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './addVehicle.css';
import VehicleSelector from './vehicleSelector/VehicleSelector';
import VehicleForm from './vehicleForm/VehicleForm';

const AddVehicle=({ addVehicle }) => {
    const history=useHistory();
    const [selectedScenario, setSelectedScenario]=useState('');
    const [vehicleName, setVehicleName]=useState('');
    const [initialX, setInitialX]=useState(0);
    const [initialY, setInitialY]=useState(0);
    const [speed, setSpeed]=useState(0);
    const [direction, setDirection]=useState('Towards');

    const handleAddVehicle=() => {
        if (!vehicleName||initialX<0||initialY<0||initialX>800||initialY>600||speed<0) {
            alert('Please fill in all fields correctly.');
            return;
        }

        const newVehicle={
            vehicleName,
            initialX,
            initialY,
            speed,
            direction,
            scenario: selectedScenario,
        };

        addVehicle(newVehicle);
        setVehicleName('');
        setInitialX(0);
        setInitialY(0);
        setSpeed(0);
        setDirection('Towards');
    };

    const handleScenarioChange=(e) => {
        setSelectedScenario(e.target.value);
    };

    return (
        <div className="form-container">
            <h2>Add Vehicle</h2>
            <VehicleSelector selectedScenario={selectedScenario} onScenarioChange={handleScenarioChange} />
            <VehicleForm
                vehicleName={vehicleName}
                setVehicleName={setVehicleName}
                initialX={initialX}
                setInitialX={setInitialX}
                initialY={initialY}
                setInitialY={setInitialY}
                speed={speed}
                setSpeed={setSpeed}
                direction={direction}
                setDirection={setDirection}
            />
            <br />
            <button style={{ background: "#00c04b" }} onClick={handleAddVehicle}>Add</button>
            <button
                style={{ background: "orange" }}
                onClick={() => {
                    setVehicleName('');
                    setInitialX(0);
                    setInitialY(0);
                    setSpeed(0);
                    setDirection('Towards');
                }}
            >
                Reset
            </button>
            <button style={{ background: "#77c3ec" }} onClick={() => history.goBack()}>Go Back</button>
        </div>
    );
};

export default AddVehicle;
