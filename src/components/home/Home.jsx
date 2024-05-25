import React, { useState, useEffect, useRef } from 'react';
import data from "../../data.json";
import './home.css';
import ScenarioSelector from './selector/ScenarioSelector';
import VehicleTable from './vehicleTable/VehicleTable';
import SimulationControls from './simulationControls/SimulationControl';
import SimulationView from './simulation/SimulationView';

const Home=() => {
    const initialScenario=data.scenarios.find(scenario => scenario.name==="Test Scenario");
    console.log('Scenario', initialScenario);
    const [selectedScenario, setSelectedScenario]=useState(initialScenario);
    const [vehicles, setVehicles]=useState(initialScenario? initialScenario.vehicles.map(vehicle => ({ ...vehicle })):[]);
    console.log('Dummy', initialScenario? initialScenario.vehicles.map(vehicle => ({ ...vehicle })):[]);
    const [simulationRunning, setSimulationRunning]=useState(false);
    const intervalIdRef=useRef(null);

    useEffect(() => {
        if (selectedScenario) {
            setVehicles(selectedScenario.vehicles.map(vehicle => ({ ...vehicle })));
        }
    }, [selectedScenario]);

    const startSimulation=() => {
        setSimulationRunning(true);
        intervalIdRef.current=setInterval(() => {
            setVehicles(prevVehicles => prevVehicles.map(vehicle => {
                let { initialX, initialY, speed, direction }=vehicle;
                switch (direction) {
                    case 'Towards':
                        initialX+=speed;
                        break;
                    case 'Backwards':
                        initialX-=speed;
                        break;
                    case 'Upwards':
                        initialY-=speed;
                        break;
                    case 'Downwards':
                        initialY+=speed;
                        break;
                    default:
                        break;
                }
                return {
                    ...vehicle,
                    initialX: Math.max(0, Math.min(800, initialX)),
                    initialY: Math.max(0, Math.min(600, initialY))
                };
            }));
        }, 1000);

        setTimeout(stopSimulation, selectedScenario.time*1000);
    };

    const stopSimulation=() => {
        clearInterval(intervalIdRef.current);
        setSimulationRunning(false);
    };

    return (
        <div className="home-container">
            <ScenarioSelector
                scenarios={data.scenarios}
                selectedScenario={selectedScenario}
                setSelectedScenario={setSelectedScenario}
            /> 
            <br />
            {selectedScenario&&(
                <>
                    <VehicleTable vehicles={vehicles} />
                    <SimulationControls
                        startSimulation={startSimulation}
                        stopSimulation={stopSimulation}
                        simulationRunning={simulationRunning}
                    />
                    <br />
                    <SimulationView vehicles={vehicles} />
                </>
            )}
        </div>
    );
};

export default Home;
