import {connect} from 'react-redux';
import './driversList.scss';
import * as React from "react";
import {IDriver} from "../../shared/interfaces/IDriver";
import Driver from "./driver";
import {ILocation} from "../../shared/interfaces/ILocation";
import {setMapLocationAction} from "../../store/map/actions";
import {filterBy, parseLocation, sortBy} from "../../shared/utils/utils";
import {removeDriverAction, fetchDrivers} from '../../store/drivers/actions';
import {filterByAction} from '../../store/filters/actions';

interface DriverListProps {
    fetchDrivers: typeof fetchDrivers;
    setMapLocationAction: typeof setMapLocationAction;
    removeDriverAction: typeof removeDriverAction;
    filterByAction: typeof filterByAction;
    drivers: Array<IDriver>;
    filterBy: string;
}

interface DriverListState {
    sortBy: string,
    sortAscending: boolean
}


class DriversList extends React.Component<DriverListProps,DriverListState> {
    componentDidMount(): void {
        this.props.fetchDrivers();

        this.setState({
            sortBy: 'name',
            sortAscending: true,
        })
    }

    onFilter = (e: any) => {
        this.props.filterByAction(e.target.value);
    };

    handleLocateDriver = (driverLocation: ILocation) => {
        this.props.setMapLocationAction(parseLocation(driverLocation));
    };

    handleRemoveDriver = (driverId: string) => {
        this.props.removeDriverAction(driverId);
    };

    toggleSortAscending() {
        this.setState({
            sortAscending: !this.state.sortAscending
        })
    }

    toggleSortBy() {
        const sortBy = this.state.sortBy === 'name' ? 'age': 'name';
        this.setState({
            sortBy
        })
    }

    renderDrivers() {
        if (this.props.drivers.length) {
            return filterBy(sortBy(this.props.drivers, this.state.sortBy, this.state.sortAscending), 'name', this.props.filterBy)
                .map(driver => {
                    return <Driver key={driver._id}
                           onRemoveDriver={this.handleRemoveDriver}
                           onLocateDriver={this.handleLocateDriver}
                           driver={driver}/>
            })
        }

        return <h1>No Available Drivers!</h1>;
    }

    render() {
        return (
            <div className='drivers-list'>
                <input onChange={this.onFilter} placeholder='filter name' type="text" className="drivers-list__filter-input"/>
                <div className="drivers-list_wrapper">
                    <div className="drivers-list_wrapper_sort-wrapper">
                        <h2 className="drivers-list_wrapper_sort-wrapper__heading">Sort By:</h2>
                        <div onClick={() => this.toggleSortAscending()} className="drivers-list_wrapper_sort-wrapper_sort-by">
                            <div className={this.state && this.state.sortAscending ? "arrow arrow--up" : "arrow arrow--down"}></div>
                            <span className="drivers-list_wrapper_sort-wrapper_sort-by__name">
                                {this.state ? this.state.sortBy : 'name'}
                            </span>
                        </div>
                        <span onClick={()=> this.toggleSortBy()} className="drivers-list_wrapper_sort-wrapper__alternative">{this.state && this.state.sortBy === 'name'? 'age' : 'name'}</span>
                    </div>

                    {this.renderDrivers()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: DriverListProps)  => { return state };

export default connect(mapStateToProps, { filterByAction, removeDriverAction, setMapLocationAction, fetchDrivers })(DriversList);
