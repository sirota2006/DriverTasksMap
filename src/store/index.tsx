import { combineReducers } from "redux";
import { driversReducer } from './drivers/reducer';
import { tasksReducer } from "./tasks/reducer";
import {mapReducer} from "./map/reducer";
import {filterReducer} from "./filters/reducer";

export default combineReducers({
    drivers: driversReducer,
    tasks: tasksReducer,
    map: mapReducer,
    filterBy: filterReducer
});

