import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Game} from "./modules/Game";
import {GameStatusProvider} from "./components/GameStatusProvider";

const Main = () => {
    return (
        <>
            <GameStatusProvider>
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" name="Main Page" component={Game} />
                        <Route
                            path={`/game`}
                            name="Paper Signing Game"
                            component={Game}
                        />
                    </Switch>
            </BrowserRouter>
            </GameStatusProvider>
        </>
    )
};

export { Main };