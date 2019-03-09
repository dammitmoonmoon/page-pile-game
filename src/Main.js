import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactPage from "./ReactPage";
import {PaperPile} from "./PaperPile/PaperPile";
import {withRouter} from "react-router";

const Main = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" name="Main Page" component={ReactPage} />
                <Route
                    path={`/papers`}
                    name="Paper Signing Stage"
                    component={PaperPile}
                />
            </Switch>
        </BrowserRouter>
    </>
);

export { Main };