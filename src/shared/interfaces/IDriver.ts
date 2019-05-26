import {ILocation} from "./ILocation";
import {ITask} from "./ITask";

export interface IDriver {
    _id: string;
    name: string;
    age: number;
    location: ILocation;
    picture: string;
    phone: number;
    task: ITask;
}
