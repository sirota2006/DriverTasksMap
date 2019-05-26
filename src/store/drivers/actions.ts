import {Dispatch} from "redux";
import {
    DriverFetchAction,
    FETCH_DRIVERS,
    RemoveDriverAction,
    REMOVE_DRIVER,
    AssignTaskAction,
    ASSIGN_TASK
} from "./types";
import {DRIVERS_API} from "../../shared/constants/apis";
import Axios from "axios";
import {ITask} from "../../shared/interfaces/ITask";

export function fetchDrivers(): (dispatch: Dispatch<DriverFetchAction>) => Promise<void> {
    return async (dispatch: Dispatch<DriverFetchAction>) => {
        const { data } = await Axios.get(DRIVERS_API);
        dispatch({
            type: FETCH_DRIVERS,
            payload: data
        })
    }
}

export function removeDriverAction(driverId: string): RemoveDriverAction {
    return {
        type: REMOVE_DRIVER,
        payload: driverId
    }
}

export function assignTaskAction(task: ITask, driverId: string): AssignTaskAction {
    return {
        type: ASSIGN_TASK,
        payload: {task, driverId}
    }
}

