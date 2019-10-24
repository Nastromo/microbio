


export const setActive = (bool) => ({
    type: 'SET_ACT_SCRN',
    bool
});

export const activate = (e) => {
    return async (dispatch, getState) => {
        if (e.target.id === `scrn`) {
            dispatch(setActive(true));
        } else {
            dispatch(setActive(false));
        }
    }
};