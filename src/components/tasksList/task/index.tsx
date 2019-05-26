import {ITask} from "../../../shared/interfaces/ITask";
import React from 'react';
import './tasks.scss';
import DriverSelect from "./driverSelect/driverSelect";

interface TaskProps {
    task: ITask;
}

const Task: React.FunctionComponent<TaskProps> = (taskProps: TaskProps) => {

    return (
        <div className="task-wrapper">
            <div className="task-wrapper_item">
                <span className="task-wrapper_item__name">
                    {taskProps.task.title}
                </span>
            </div>
            <div className="task-wrapper_item">
                <span className="task-wrapper_item__name">
                    {taskProps.task.scheduled}
                </span>
            </div>
            <div className="task-wrapper_item">
                <div className="task-wrapper_item__select">
                    <DriverSelect taskToAssign={taskProps.task}/>
                </div>
            </div>
            <div className="task-wrapper_item">
                <span className="task-wrapper_item__name">
                    {taskProps.task.address}
                </span>
            </div>
            <div className="task-wrapper_item">
                <span className="task-wrapper_item__name">
                    {taskProps.task.location.longitude}, {taskProps.task.location.latitude}
                </span>
            </div>
        </div>
    )
};

export default Task;
