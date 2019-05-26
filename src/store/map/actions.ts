import {SET_LOCATION, SetMapLocationAction} from "./types";

export function setMapLocationAction(location: Array<number>): SetMapLocationAction {
    return {
        type: SET_LOCATION,
        payload: location
    }

}
