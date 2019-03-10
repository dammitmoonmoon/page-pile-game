import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Game} from "./modules/Game";

const Main = () => {
    return (
        <>
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" name="Main Page" component={Game} />
                        <Route
                            path={`/papers`}
                            name="Paper Signing Game"
                            component={Game}
                        />
                        <Route
                            path={`/papers-score`}
                            name="Paper Signing Score"
                            component={Game}
                        />
                    </Switch>
            </BrowserRouter>
        </>
    )
};

export { Main };