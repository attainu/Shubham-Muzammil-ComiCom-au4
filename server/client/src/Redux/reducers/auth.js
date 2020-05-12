const DEFAULT_STATE = {
    isAuthenticated: false,
    user:{}
}

export const authReducer = (state = DEFAULT_STATE, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        
        case 'SET_CURRENT_USER':
            stateCopy.isAuthenticated = !!Object.keys(action.payload).length
            stateCopy.user = action.payload;
            state = stateCopy;
            return state;

        default:
            return state;
    }
}