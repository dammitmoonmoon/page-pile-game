import * as React from 'react';

const Timer = (props) => {
    const [remainingSeconds, setRemainingSeconds] = React.useState(30);

    React.useEffect(() => {
        if (props.shouldStartTimer) {
            const interval = setInterval(() => {
                setRemainingSeconds(counter => counter - 1);
            }, 1000);

            if (remainingSeconds === 0) {
                props.setGameOver(true);
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