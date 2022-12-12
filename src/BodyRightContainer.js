import React from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import NoPage from "./pages/NoPage";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
// import './BodyRightContainer.css';

export default function BodyRightContainer(props) {
    return (
        <React.Fragment>
            <div className="right-container">
                <Switch>
                    <Route path='/' exact>
                        <Page1 />
                    </Route>
                    <Route path='/repositories' exact>
                        <Page2 />
                    </Route>
                    <Route path='/projects' exact>
                        <Page3 />
                    </Route>
                    <Route path='/packages' exact>
                        <Page4 />
                    </Route >
                    <Route path='/stars' exact>
                        <Page5 />
                    </Route >
                    <Route path='/followers' exact>
                        <Page6 data={props.data} />
                    </Route >
                    <Route path='*' >
                        <NoPage />
                    </Route >
                </Switch>
            </div>
        </React.Fragment>
    )
}