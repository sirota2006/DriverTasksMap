import {FETCH_DRIVERS, REMOVE_DRIVER, ASSIGN_TASK} from "./types";
import { DriversActionTypes } from "./types";
import {IDriver} from "../../shared/interfaces/IDriver";


export const driversReducer = (state: Array<IDriver> = [], action: DriversActionTypes): any => {
    switch (action.type) {
        case FETCH_DRIVERS:
            return action.payload;
        case REMOVE_DRIVER:
            return state.filter(driver => driver._id !== action.payload);
        case ASSIGN_TASK:
           let newDrivers: Array<IDriver> = state;
           state.forEach((driver, index)=> {
               if(driver.task && driver.task._id === action.payload.task._id) {
                   delete newDrivers[index].task;
               }
               if(driver._id === action.payload.driverId) {
                   newDrivers[index].task = action.payload.task;
               }
           });
           return newDrivers;
        default:
            return state;
    }
};

