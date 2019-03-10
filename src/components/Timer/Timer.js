import * as React from 'react';


const Timer = (props) => {
    React.useEffect(() => {
        if (props.shouldStartTimer) {
            props.api.start();
        }
    }, [props.shouldStartTimer]);

    return (
        <div>
            {props.seconds}
        </div>
    );
};

export {
    Timer
};

