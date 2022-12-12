import React from "react";
import './BodyComponent.css';
import { NavLink } from "react-router-dom";
import BodyLeftContainer from "./BodyLeftContainer";
import BodyRightContainer from "./BodyRightContainer";
import './BodyRightContainer.css';

export default function BodyComponent(props) {
    let data = props.data;
    return (
        <React.Fragment>
            <div className="upper-container">
                <NavLink to="/" exact>Overview</NavLink>
                <NavLink to='/repositories'>Repositories</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/packages'>Packages</NavLink>
                <NavLink to='/stars'>Stars</NavLink>
                <NavLink to='/followers'>Followers</NavLink>
            </div>
            <div className="body-container">
                <BodyLeftContainer data={data} />
                <BodyRightContainer data={data} />
            </div >
        </React.Fragment >
    )

}