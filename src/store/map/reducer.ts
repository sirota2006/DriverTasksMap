import {SET_LOCATION, MapState, initialLocation} from "./types";
import { MapActionTypes } from "./types";

const initialState: MapState = {
    currentLocation: initialLocation
};

export const mapReducer = (state = initialState, action: MapActionTypes): any => {
    switch (action.type) {
        case SET_LOCATION:
            return  {currentLocation: action.payload};
        default:
            return state;
    }
};

