export const SET_LOCATION = 'SET_LOCATION';

export const initialLocation = [32.109333, 34.855499];

export interface MapState {
    currentLocation: Array<number>;
}

export interface SetMapLocationAction {
    type: typeof SET_LOCATION,
    payload: Array<number>;
}

export type MapActionTypes = SetMapLocationAction;

