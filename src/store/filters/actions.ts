import {FILTER_BY, FilterAction} from "./types";

export function filterByAction (str: string): FilterAction {
    return {
        type: FILTER_BY,
        payload: str
    }
}
