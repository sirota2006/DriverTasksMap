import './tasksList.scss'
import React from 'react';
import {ITask} from '../../shared/interfaces/ITask';
import {connect} from "react-redux";
import Task from './task';
import {fetchTasks} from "../../store/tasks/actions";

interface TaskListProps {
    fetchTasks: typeof fetchTasks;
    tasks: Array<ITask>;
}

class TasksList extends React.Component<TaskListProps> {
    componentDidMount(): void {
        this.props.fetchTasks();
    }

    renderTasks() {
        if(this.props.tasks.length) {
            return this.props.tasks.map((task: ITask) => {
                return <Task key={task._id} task={task}/>
            })
        }

        return <h1>No Available Tasks</h1>
    }

    render () {
        return (
            <div className="tasks-list">
                <div className="tasks-list_tabs">
                    <div className="tasks-list_tabs_item">
                        <span className="tasks-list_tabs_item__name">
                            Title
                        </span>
                    </div>
                    <div className="tasks-list_tabs_item">
                        <span className="tasks-list_tabs_item__name">
                            Scheduled for
                        </span>
                    </div>
                    <div className="tasks-list_tabs_item">
                        <span className="tasks-list_tabs_item__name">
                            Assign to
                        </span>
                    </div>
                    <div className="tasks-list_tabs_item">
                        <span className="tasks-list_tabs_item__name">
                            Address
                        </span>
                    </div>
                    <div className="tasks-list_tabs_item">
                        <span className="tasks-list_tabs_item__name">
                            Location
                        </span>
                    </div>
                </div>
                <div className="tasks-list_tasks-wrapper">
                    {this.renderTasks()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: TaskListProps) => { return state };

export default connect(mapStateToProps, { fetchTasks })(TasksList);
