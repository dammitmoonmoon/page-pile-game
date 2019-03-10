import * as React from 'react';
import {GameStatusContext} from "../GameStatusProvider/GameStatusProvider";

const Timer = (props) => {
    const [remainingSeconds, setRemainingSeconds] = React.useState(30);
    const {setGameOver} = React.useContext(GameStatusContext);

    React.useEffect(() => {
        if (props.shouldStartTimer) {
            const interval = setInterval(() => {
                setRemainingSeconds(counter => counter - 1);
            }, 1000);

            if (remainingSeconds === 0) {
                setGameOver(true);
                clearInterval(interval);
            }

            return () => {
                clearInterval(interval);
            };
        }
    });

    return (
        <div>
            {remainingSeconds}
        </div>
    );
};

export {
    Timer
};

