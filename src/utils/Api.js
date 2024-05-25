import data from '../data.json';

const readData=() => {
    console.log(data);
    return data || JSON.parse(localStorage.getItem('data'));
};

const writeData=(newData) => {
    localStorage.setItem('data', JSON.stringify(newData));
};


const initializeLocalStorage=() => {
    if (!localStorage.getItem('data')) {
        localStorage.setItem('data', JSON.stringify(data));
    }
};

initializeLocalStorage();


export const getScenarios=() => {
    console.log('DATA', readData());
    return new Promise((resolve) => {
        const data=readData();
        resolve(data.scenarios);
    });
};

export const addScenario=(scenario) => {
    console.log(readData());
    return new Promise((resolve) => {
        const data=readData();
        const id=data.scenarios.length+1; 
        const newScenario={ id: id, ...scenario };
        data.scenarios.push(newScenario);
        writeData(data);
        resolve(newScenario);
    });
};

export const updateScenario=(id, updatedScenario) => {
    return new Promise((resolve, reject) => {
        const data=readData();
        const index=data.scenarios.findIndex(s => s.id===id);
        if (index===-1) {
            reject(new Error('Scenario not found'));
        } else {
            data.scenarios[index]={ ...data.scenarios[index], ...updatedScenario };
            writeData(data);
            resolve(data.scenarios[index]);
        }
    });
};

export const deleteScenario=(id) => {
    return new Promise((resolve, reject) => {
        const data=readData();
        const index=data.scenarios.findIndex(s => s.id===id);
        if (index===-1) {
            reject(new Error('Scenario not found'));
        } else {
            data.scenarios.splice(index, 1);
            writeData(data);
            resolve();
        }
    });
};

export const getVehicles=(scenarioId) => {
    return new Promise((resolve, reject) => {
        const data=readData();
        const scenario=data.scenarios.find(s => s.id===scenarioId);
        if (!scenario) {
            reject(new Error('Scenario not found'));
        } else {
            resolve(scenario.vehicles);
        }
    });
};

export const addVehicle=(scenarioId, vehicle) => {
    return new Promise((resolve, reject) => {
        const data=readData();
        const scenario=data.scenarios.find(s => s.id===scenarioId);
        if (!scenario) {
            reject(new Error('Scenario not found'));
        } else {
            const newVehicle={ id: Date.now(), ...vehicle };
            scenario.vehicles.push(newVehicle);
            writeData(data);
            resolve(newVehicle);
        }
    });
};

export const updateVehicle=(scenarioId, vehicleId, updatedVehicle) => {
    return new Promise((resolve, reject) => {
        const data=readData();
        const scenario=data.scenarios.find(s => s.id===scenarioId);
        if (!scenario) {
            reject(new Error('Scenario not found'));
        } else {
            const index=scenario.vehicles.findIndex(v => v.id===vehicleId);
            if (index===-1) {
                reject(new Error('Vehicle not found'));
            } else {
                scenario.vehicles[index]={ ...scenario.vehicles[index], ...updatedVehicle };
                writeData(data);
                resolve(scenario.vehicles[index]);
            }
        }
    });
};

export const deleteVehicle=(scenarioId, vehicleId) => {
    return new Promise((resolve, reject) => {
        const data=readData();
        const scenario=data.scenarios.find(s => s.id===scenarioId);
        if (!scenario) {
            reject(new Error('Scenario not found'));
        } else {
            const index=scenario.vehicles.findIndex(v => v.id===vehicleId);
            if (index===-1) {
                reject(new Error('Vehicle not found'));
            } else {
                scenario.vehicles.splice(index, 1);
                writeData(data);
                resolve();
            }
        }
    });
};
