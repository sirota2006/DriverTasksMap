import {IDriver} from "../../shared/interfaces/IDriver";
import {ITask} from "../../shared/interfaces/ITask";

export const FETCH_DRIVERS = 'FETCH_DRIVERS';
export const REMOVE_DRIVER = 'REMOVE_DRIVER';
export const ASSIGN_TASK = 'ASSIGN_TASK';

export interface DriverFetchAction {
    type: typeof FETCH_DRIVERS;
    payload: Array<IDriver>;
}

export interface RemoveDriverAction {
    type: typeof REMOVE_DRIVER;
    payload: string;
}

export interface AssignTaskAction  {
    type: typeof ASSIGN_TASK,
    payload: {
        task: ITask,
        driverId: string
    }
}

export type DriversActionTypes = DriverFetchAction | RemoveDriverAction | AssignTaskAction;


