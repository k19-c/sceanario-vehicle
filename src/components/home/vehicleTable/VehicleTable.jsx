import React from 'react';
import { Edit } from '../../../svg/Edit';
import { Delete } from '../../../svg/Delete';

const VehicleTable=({ vehicles }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Vehicle ID</th>
                    <th>Vehicle Name</th>
                    <th>Position X</th>
                    <th>Position Y</th>
                    <th>Speed</th>
                    <th>Direction</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map(vehicle => (
                    <tr key={vehicle.id}>
                        <td>{vehicle.id}</td>
                        <td>{vehicle.name}</td>
                        <td>{vehicle.initialX}</td>
                        <td>{vehicle.initialY}</td>
                        <td>{vehicle.speed}</td>
                        <td>{vehicle.direction}</td>
                        <td><Edit /></td>
                        <td><Delete /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default VehicleTable;
