import React from "react"
import PageHelper5 from "./PageHelper5"

export default function Page2 () {
    return (
        <React.Fragment>
            <h3>Stars</h3>
            <hr/>
            <div>
                <PageHelper5 link="bitshadow / Slate"  title="A text only meme generator" topic="JavaScript" date="Updated on Apr 25, 2017"/>
                <PageHelper5 link="DanielRapp / doppler" title="Motion Detection using doppler effect" topic="JavaScript" date="Updated on Aug 13, 2016"/>
                <PageHelper5 link="bitshadow / iconate" topic="JavaScript" date="Updated on Aug 14, 2014"/>
            </div>
        </React.Fragment>
    )
}