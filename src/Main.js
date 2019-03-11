import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Game} from "./modules/Game";
import {GameStatusProvider} from "./components/GameStatusProvider";
import HashRouter from "react-router-dom/es/HashRouter";

const Main = () => {
    return (
        <>
            <GameStatusProvider>
            <HashRouter>
                    <Switch>
                        <Route exact path="/" name="Main Page" component={Game} />
                    </Switch>
            </HashRouter>
            </GameStatusProvider>
        </>
    )
};

export { Main };