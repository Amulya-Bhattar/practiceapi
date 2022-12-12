import React from "react"
import PageHelper2 from "./PageHelper2"
import styles from './PageHelper2.module.css'

export default function Page2 () {
    return (
        <React.Fragment>
            <hr/>
            <div>
                <PageHelper2 link="react-starter-components" fork="Forked from " from= "ravihamsa/react-starter-components" title="react-starter" topic="JavaScript" date="Updated on Apr 25, 2017"/>
                <PageHelper2 link="react-todo" fork="ToDo App in React" topic="JavaScript" date="Updated on Aug 13, 2016"/>
                <PageHelper2 link="KalyanSai99.github.io" date="Updated on Aug 14, 2014"/>
            </div>
        </React.Fragment>
    )
}