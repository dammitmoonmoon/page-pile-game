import * as React from 'react';
import {GameStatusContext} from "../../Main";

const Timer = (props) => {
    const [remainingSeconds, setRemainingSeconds] = React.useState(30);
    const [ contextData ] = React.useContext(GameStatusContext);

    React.useEffect(() => {
        if (props.shouldStartTimer) {
            const interval = setInterval(() => {
                setRemainingSeconds(counter => counter - 1);
            }, 1000);

            if (remainingSeconds === 0) {
                contextData.setGameOver(true);
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

