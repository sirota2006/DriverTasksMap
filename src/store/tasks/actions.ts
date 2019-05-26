import {Dispatch} from "redux";
import Axios from "axios";
import {FETCH_TASKS, TasksFetchAction} from "./types";
import {TASKS_API} from "../../shared/constants/apis";

export function fetchTasks(): (dispatch: Dispatch<TasksFetchAction>) => Promise<void> {
    return async (dispatch: Dispatch<TasksFetchAction>) => {
        const { data } = await Axios.get(TASKS_API);
        dispatch({
            type: FETCH_TASKS,
            payload: data
        })
    }
}

