// @ts-ignore
import { ReactBingmaps } from 'react-bingmaps';

import React from 'react';
import './map.scss';
import {IDriver} from "../../shared/interfaces/IDriver";
import {ITask} from "../../shared/interfaces/ITask";
import {connect} from 'react-redux';
import {MAP_API} from "../../shared/constants/apis";
import {filterBy, parseLocation} from "../../shared/utils/utils";
import {MapState} from "../../store/map/types";
import {Mark} from "./types";

interface StateProps {
    drivers: Array<IDriver>;
    tasks: Array<ITask>;
    map: MapState;
    filterBy: string;
}

const DRIVER_ICON = "https://img.icons8.com/metro/16/000000/delivery.png";
const TASK_ICON = "https://img.icons8.com/metro/16/000000/realtime-protection.png";

class Map extends React.Component<StateProps> {

    mapMarkers = () => {
        if(this.props.drivers.length && this.props.tasks.length) {
            const marks: Array<Mark> = this.mapTasksLocations().concat(this.mapDriversLocations());
            return marks;
        }
    };

    mapDriversLocations = (): Array<Mark> => {
        const driversMarks: Array<Mark> = [];
        filterBy(this.props.drivers, 'name', this.props.filterBy).forEach(driver => {
            driversMarks.push({
                location: parseLocation(driver.location)
                ,option: {
                    title: 'Driver: ' + driver.name,
                    icon: DRIVER_ICON
                }
            })
        });

        return driversMarks;
    };

    mapTasksLocations = (): Array<Mark> => {
        const tasksMarks: Array<Mark> = [];
        this.props.tasks.forEach(task => {
            tasksMarks.push({
                location: parseLocation(task.location)
                ,option: {
                    title: 'Task: ' + task.title,
                    icon: TASK_ICON
                }
            })
        });

        return tasksMarks;
    };

    render() {
        return (
            <div className="map-container">
                <ReactBingmaps
                    bingmapKey={MAP_API}
                    center={this.props.map.currentLocation}
                    pushPins={this.mapMarkers()}
                    zoom = {15}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: StateProps): StateProps => {
    return state;
};

export default connect(mapStateToProps, {})(Map);
