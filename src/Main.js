import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Game} from "./modules/Game";
import {PILE_SIZE} from "./components/PaperPile/PaperPile";

const GameStatusContext = React.createContext([0, () => {}]);

const Main = () => {
    const [pageCount, setPageCount] = React.useState(PILE_SIZE);
    const [score, setScore] = React.useState(0);
    const [isGameOver, setGameOver] = React.useState(false);
    return (
        <>
            <GameStatusContext.Provider value={[{pageCount, setPageCount, score, setScore, isGameOver, setGameOver}]}>
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
            </GameStatusContext.Provider>
        </>
    )
};

export { Main, GameStatusContext };