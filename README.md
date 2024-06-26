# React Vehicle Simulation Application

This project is a vehicle simulation application built using React.js and JSON server.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

## Features
- Each scenario can have multiple vehicles.
- Vehicles move based on speed and direction parameters when the simulation starts.
- Data stored and managed using a custom Json server.
- User-friendly interface with a sidebar for easy navigation.


### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/vehicle-simulation-app.git
    cd vehicle-simulation-app
    ```

### Installation
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the React application:
    ```sh
    npm start
    ```

## Usage

### Adding a Scenario
1. Navigate to the "Add Scenario" page from the sidebar.
2. Fill in the scenario details: Scenario ID, Scenario Name, and Time.
3. Click "Add Scenario" to save the scenario.


### Starting a Simulation
1. Go to the "Home" page.
2. Select a scenario from the dropdown.
3. Click "Start Simulation" to see the vehicles move according to the scenario parameters.


### Project Structure
vehicle-simulation-app/

├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── AddScenario.jsx
│ │ ├── AddVehicle.jsx
│ │ ├── Home.jsx
│ │ └── ...
│ ├── utils/
│ │ └── api.js
│ ├── App.jsx
│ ├── index.js
│ └── data.json
├── svg/
│ ├── Delete.jsx
│ |__ Edit.jsx 
│ │__ Plus.jsx
│
├── README.md
└── package.json

### Deployment
1. Sign in to Netlify and create a new site from your GitHub repository.
2. Follow the on-screen instructions to deploy the app.
3. Deployment Link : https://master--vehicle-simulator.netlify.app/
