import React from "react";
import styles from './PageHelper5.module.css'

export default function PageHelper2(props) {
    return (
        <React.Fragment>
            <div>
                <a href='#' className={styles.link}>{props.link}</a>
                <p className={styles.author}> {props.fork}<a href="#" className={styles.forker}>{props.from}</a></p>
                <div className={styles.titleColor}>{props.title}</div>
                <div className={styles.flex}>
                    <p className={styles.titleColor}>{props.topic}</p>
                    <p className={styles.date}>{props.date}</p>
                </div>
            </div>
            <hr/>
        </React.Fragment>
    )
}