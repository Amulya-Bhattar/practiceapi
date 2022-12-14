import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderComponent.module.css";

export default function HeaderComponent() {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div className={styles.div1}>Product
                    </div>
                    <div className={styles.div2}>Solutions</div>
                    <div className={styles.div3}>Open Source</div>
                    <div className={styles.div4}>Pricing</div>
                    <a href="https://github.com/login" ><div className={styles.signin}>Sign in</div></a>
                    <a href="https://github.com/signup" ><div className={styles.signup}>Sign up</div></a>
                </div>
            </div>
        </React.Fragment >
    )
}