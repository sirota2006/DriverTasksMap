import {FILTER_BY, FilterAction} from "./types";


export const filterReducer = (state: string = '', action: FilterAction): any => {
    switch (action.type) {
        case FILTER_BY:
            return  action.payload;
        default:
            return state;
    }
};


