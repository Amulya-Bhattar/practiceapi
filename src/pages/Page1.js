import React from "react"
import PageHelper1 from "./PageHelper1"
import styles from './PageHelper1.module.css';
import ContributionsPage from "./ContributionsPage";

export default function Page1() {
    return (
        <React.Fragment>
            <div className={styles.c2}>Popular repositories</div>
            <div className={styles.overviewBox}>
                <PageHelper1 link="kalyansai99.github.io" />
                <PageHelper1 link="react-todo" tag1="toDO App in React" tag2="JavaScript"/>
                <PageHelper1 link="react-starter-components" from="Forked from " author = "ravihamsa/react-starter-components" tag1="react-starter" tag2="JavaScript" />
            </div>
        <ContributionsPage/>    
        </React.Fragment>
    )
}