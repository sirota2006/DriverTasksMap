import {ILocation} from "./ILocation";

export interface ITask {
    _id: string;
    title: string;
    scheduled: Date;
    address: string;
    location: ILocation;
}
