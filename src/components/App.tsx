import './App.scss';
import React from 'react';
import DriversList from "./DriversList";
import TasksList from './tasksList';
import Map from './map'

const App: React.FunctionComponent = () => {
    return (
        <div className="main">
            <div className="main_top-wrapper">
                <DriversList />
                <Map/>
            </div>
           <TasksList />
        </div>
    );
};

export default App;
