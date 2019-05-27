import React from 'react';
import {connect} from "react-redux";
import {IDriver} from "../../../../shared/interfaces/IDriver";
import {ITask} from "../../../../shared/interfaces/ITask";
import './driverSelect.scss'
import {filterBy} from "../../../../shared/utils/utils";
import {assignTaskAction} from '../../../../store/drivers/actions';

interface OwnProps {
    taskToAssign: ITask;
}

interface DriverSelectProps {
    openModal: boolean,
    assignedDriverName: string
}

interface StateProps {
    drivers: Array<IDriver>;
    filterBy: string
}

interface DispatchProps {
    assignTaskAction: typeof assignTaskAction;
}

type Props = OwnProps & StateProps & DispatchProps;

class DriverSelect extends React.Component<Props, DriverSelectProps> {
    componentDidMount(): void {
        this.setState({
            openModal: false,
            assignedDriverName: ''
        })
    }

    onAssignTask = (driver: IDriver) => {
        if (!driver.task) {
        this.toggleModal();
        this.props.assignTaskAction(this.props.taskToAssign, driver._id);
            this.setState((state: DriverSelectProps) => {
                state.assignedDriverName = driver.name;
            })
        }
    };


    showDriversModal = () => {
        if(this.state && this.state.openModal) {
            return (
                <div className="driver-select_btn_modal">
                        <div className="driver-select_btn_modal_wrapper">
                            <span onClick={() => this.toggleModal()} className="driver-select_btn_modal_wrapper__close">&times;</span>
                            {filterBy(this.props.drivers, 'name', this.props.filterBy).map(driver => {
                                return (
                                    <div key={driver._id} onClick={() => this.onAssignTask(driver)} className={driver.task ? "driver-select_btn_modal_wrapper_driver assigned" :  "driver-select_btn_modal_wrapper_driver"}>
                                        <span className="driver-select_btn_modal_wrapper_driver__name">
                                            {driver.name}
                                        </span>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            )
        }
    };

    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        });
    };

    render() {
        return (
            <div className="driver-select">
                <div onClick={this.toggleModal} className={this.state && this.state.assignedDriverName ? "driver-select_btn active" : "driver-select_btn"}>
                    <span className="driver-select_btn__selected">
                        {this.state && this.state.assignedDriverName ? this.state.assignedDriverName: 'Select Driver'}
                    </span>
                    { this.showDriversModal() }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: StateProps): StateProps => {
    return state;
};

export default connect(mapStateToProps, { assignTaskAction })(DriverSelect);
