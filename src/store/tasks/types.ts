import {ITask} from "../../shared/interfaces/ITask";

export const FETCH_TASKS = 'FETCH_TASKS';

export interface TasksFetchAction {
    type: typeof FETCH_TASKS;
    payload: Array<ITask>
}

export type TasksActionTypes = TasksFetchAction;
