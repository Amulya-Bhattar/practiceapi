import React from "react"
import styles from "./contributionspage.module.css"

export default function ContributionsPage() {
    return (
        <React.Fragment>
            <h6>0 Contributions in the last year</h6>
            <div className={styles.outerPart}>
                <svg width="880px" height="130px" >
                    <g fill="gray" className={styles.group1}>
                        <text x="1" y="55">Mon</text>
                        <text x="1" y="85">Wed</text>
                        <text x="1" y="115">Fri</text>
                    </g>
                    <g fill="gray" >
                    <text x="50" y="20">Oct</text>
                        <rect width="11" height="11" x="50" y="30" />
                        <rect width="11" height="11" x="50" y="45" />
                        <rect width="11" height="11" x="50" y="60" />
                        <rect width="11" height="11" x="50" y="75" />
                        <rect width="11" height="11" x="50" y="90" />
                        <rect width="11" height="11" x="50" y="105" />
                        <rect width="11" height="11" x="50" y="120" />

                        <rect width="11" height="11" x="65" y="30" />
                        <rect width="11" height="11" x="65" y="45" />
                        <rect width="11" height="11" x="65" y="60" />
                        <rect width="11" height="11" x="65" y="75" />
                        <rect width="11" height="11" x="65" y="90" />
                        <rect width="11" height="11" x="65" y="105" />
                        <rect width="11" height="11" x="65" y="120" />

                        <text x="80" y="20">Nov</text>

                        <rect width="11" height="11" x="80" y="30" />
                        <rect width="11" height="11" x="80" y="45" />
                        <rect width="11" height="11" x="80" y="60" />
                        <rect width="11" height="11" x="80" y="75" />
                        <rect width="11" height="11" x="80" y="90" />
                        <rect width="11" height="11" x="80" y="105" />
                        <rect width="11" height="11" x="80" y="120" />

                        <rect width="11" height="11" x="95" y="30" />
                        <rect width="11" height="11" x="95" y="45" />
                        <rect width="11" height="11" x="95" y="60" />
                        <rect width="11" height="11" x="95" y="75" />
                        <rect width="11" height="11" x="95" y="90" />
                        <rect width="11" height="11" x="95" y="105" />
                        <rect width="11" height="11" x="95" y="120" />
                    </g>
                </svg>
            </div>
        </React.Fragment>
    )
}