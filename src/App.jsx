import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import data from './data.json'
import Home from './components/home/Home';
import AllScenarios from './components/allScenarios/AllScenarios';
import AddScenario from './components/addScenarios/AddScenario';
import AddVehicle from './components/addVehicle/AddVehicle';

import './App.css';


const App=() => {


  const [vehicles, setVehicles]=useState(data.scenarios);

  const addVehicle=(newVehicle) => {
    setVehicles([...vehicles, newVehicle]);
  };
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route 
            path="/" exact  
            component={Home} 
            render={() => <Home vehicles={vehicles} setVehicles={setVehicles} />}
          />
          <Route 
            path="/add-scenario" 
            render={() => <AddScenario />} 
          />
          <Route 
            path="/all-scenarios" 
            render={() => <AllScenarios vehicles={vehicles} setVehicles={setVehicles}   />} 
          />
          <Route 
            path="/add-vehicle/:scenarioId?" 
            render={() => <AddVehicle addVehicle={addVehicle}  />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
