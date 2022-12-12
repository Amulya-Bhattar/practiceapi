import React from "react";
import './BodyLeftContainer.css';
import { useSelector } from "react-redux";

export default function BodyLeftContainer(props) {
    const followers = useSelector(state => state.followers);
    return (
        <React.Fragment>
            <div className="left-container">
                <img src={props.data.avatar_url} className="img-container" />
                <div className="name-login">{props.data.name}</div>
                <div className="login"> {props.data.login}</div>
                <a href="https://github.com/login" className="follow" target="_blank">Follow</a>
                <div>
                    <a className="followers" href="#" > <b>{followers} </b>followers</a>
                    <a className="followers" href="#"> <b>{props.data.following} </b>following</a>
                </div>
                <p className="location">{props.data.location}</p>
                <a className="location" href="#">Block or Report</a>
            </div>
        </React.Fragment>
    )
}
