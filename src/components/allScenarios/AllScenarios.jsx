import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { deleteScenario, getScenarios } from '../../utils/Api';
import './allScenarios.css';
import ScenarioActions from './scenarioActions/ScenarioActions';
import ScenarioTable from './scenarioTable/ScenarioTable';

const AllScenarios=({ vehicles, setVehicles }) => {

    const history = useHistory();

    useEffect(() => {
        const fetchData=async () => {
            const scenariosData=await getScenarios();
            setVehicles(scenariosData);
        };
        fetchData();
    }, [setVehicles]);

    const handleDeleteScenario=async (id) => {
        try {
            await deleteScenario(id);
            setVehicles(vehicles.filter(scenario => scenario.id!==id));
        } catch (error) {
            console.error("Error deleting scenario:", error);
        }
    };

    return (
        <div className="table-container">
            <ScenarioActions history={history} />
            <ScenarioTable vehicles={vehicles} handleDeleteScenario={handleDeleteScenario} history={history} />
        </div>
    );
};

export default AllScenarios;
