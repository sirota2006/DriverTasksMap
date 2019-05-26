import { FETCH_TASKS} from "./types";
import { TasksActionTypes } from "./types";
import {ITask} from "../../shared/interfaces/ITask";


export const tasksReducer = (state: Array<ITask> = [], action: TasksActionTypes): Array<ITask> => {
    switch (action.type) {
        case FETCH_TASKS:
            return action.payload;
        default:
            return state;
    }
};

