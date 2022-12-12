import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from './Page6.module.css'

export default function Page6(props) {
    const dispatch = useDispatch();
    const followers = useSelector(state => state.followers);
    function clickHandler() {
        dispatch({ type: 'INCREMENT' });
    }

    return (
        <React.Fragment>
            <div className={styles.followersDiv}>
                <div> Click on + to follow</div>
                <div><button onClick={clickHandler}>+</button>Follow</div>
                <div>Total Followers are {followers}</div>
            </div>
        </React.Fragment>
    )
}