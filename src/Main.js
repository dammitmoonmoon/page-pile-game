import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Game} from "./Game";

const Main = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" name="Main Page" component={Game} />
                <Route
                    path={`/papers`}
                    name="Paper Signing Stage"
                    component={Game}
                />
            </Switch>
        </BrowserRouter>
    </>
);

export { Main };