import './driver.scss'
import React from 'react';
import {IDriver} from "../../../shared/interfaces/IDriver";

interface DriverProps{
    driver: IDriver;
    onLocateDriver: Function;
    onRemoveDriver: Function;
}

const Driver: React.FunctionComponent<DriverProps> = ( driverProps: DriverProps ) => {

    return (
        <div className="driver">
            <img className="driver__picture" src="http://clipart-library.com/images/pi7rn8LdT.png" alt="driver"/>
            <div className="driver_details">
                <h3 className="driver_details__name">{ driverProps.driver.name }</h3>
                <span className="driver_details__sub-detail">age: { driverProps.driver.age }</span>
                <span className="driver_details__sub-detail">number: { driverProps.driver.phone }</span>
            </div>
            <div className="driver_actions">
                <button onClick={() => driverProps.onLocateDriver(driverProps.driver.location)} className="driver_actions__btn driver_actions__btn--select">Select</button>
                <button onClick={() => driverProps.onRemoveDriver(driverProps.driver._id)} className="driver_actions__btn driver_actions__btn--remove">Remove</button>
            </div>

        </div>
    )
};

export default Driver;
