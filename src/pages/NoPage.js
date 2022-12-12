import React from "react";
import styles from './NoPage.module.css';
export default function NoPage() {
    return (
        <React.Fragment>
            <div className={styles.noPage}>
            OOPS!! No Page found
            </div>
        </React.Fragment>
    )
}