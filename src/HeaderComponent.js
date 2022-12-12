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
                    <Link to = {{pathname:"https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fkalyansai99%3Ftab%3Dprojects"}} id="123"><div>Sign in</div></Link>
                </div>
            </div>
        </React.Fragment >
    )
}