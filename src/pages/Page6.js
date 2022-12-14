import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from './Page6.module.css'

export default function Page6(props) {
    const dispatch = useDispatch();
    const followers = useSelector(state => state.followers);
    function incrementHandler() {
        dispatch({ type: 'INCREMENT' });
    }
    function decrementHandler() {
        dispatch({ type: 'DECREMENT' });
    }

    return (
        <React.Fragment>
            <div className={styles.followersDiv}>
                <div> Click on (+) to follow and (-) to Unfollow</div>
                <div className={styles.buttons}>
                    <div><button onClick={incrementHandler}>+</button>Follow</div>
                    <div><button onClick={decrementHandler}>-</button>Unfollow</div>
                </div>
                <div>Total Followers are {followers}</div>
            </div>
        </React.Fragment>
    )
}