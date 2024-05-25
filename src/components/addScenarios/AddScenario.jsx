import React, { useState } from 'react';
import { addScenario } from '../../utils/Api';
import { useHistory } from 'react-router-dom';
import  './addScenario.css';

const AddScenario=() => {
   
    const history = useHistory();
    const [name, setName]=useState('');
    const [time, setTime]=useState('');

    const handleAddScenario = async () => {
        // Perform validation if needed
        const newScenario={ name: name, time: parseInt(time) };
        await addScenario(newScenario);
        history.push('/all-scenarios'); // Navigate back to AllScenarios page
    };


    return (
        <div className="form-container">
            <h4 className='add'>Scenario/add</h4>
            <h4>Add Scenario</h4>
            <div className='flex'>
                <div>
                    <label>Scenario Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Scenario Time (seconds)</label>
                    <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
            </div>
            <br />
            <div>
                <button style={{ background: "#00c04b" }} onClick={handleAddScenario}>Add</button>
                <button style={{ background: "orange" }} onClick={() => { setName(''); setTime(''); }}>Reset</button>
                <button style={{ background: "#77c3ec" }} onClick={() => history.goBack()}>Go Back</button>
            </div>
        </div>
    );
};

export default AddScenario;
