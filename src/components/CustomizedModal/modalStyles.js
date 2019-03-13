const modalStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        padding               : 'none',
        border                : 'none',
        background            : 'none',
    },
    overlay: {
        backgroundColor: 'rgb(79, 79, 79, 0.8)',
        zIndex: 5000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export {
    modalStyles
};