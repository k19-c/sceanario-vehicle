import React from 'react';
import Plus from '../../../svg/Plus';
import { Edit } from '../../../svg/Edit';
import { Delete } from '../../../svg/Delete';


const ScenarioTable=({ vehicles, handleDeleteScenario, history }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Scenario ID</th>
                    <th>Scenario Name</th>
                    <th>Scenario Time</th>
                    <th>Number of Vehicles</th>
                    <th>Add Vehicle</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map(scenario => (
                    <tr key={scenario.id}>
                        <td>{scenario.id}</td>
                        <td>{scenario.name}</td>
                        <td>{scenario.time}s</td>
                        <td>{scenario.vehicles.length}</td>
                        <td onClick={() => history.push(`/add-vehicle/${scenario.id}`)}>
                            <Plus />
                        </td>
                        <td onClick={() => history.push(`/edit-scenario/${scenario.id}`)}>
                            <Edit />
                        </td>
                        <td onClick={() => handleDeleteScenario(scenario.id)}>
                            <Delete />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ScenarioTable;
