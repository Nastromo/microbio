


export const isScreen = (state = true, action) => {
    switch (action.type) {
        case `SET_ACT_SCRN`:
            return action.bool;

        default: return state;
    }
}