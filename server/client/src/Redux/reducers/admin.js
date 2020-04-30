const DEFAULT_STATE = {
    isAuthenticated: false,
    admin:{}
}

export const adminReducer = (state = DEFAULT_STATE, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        
        case 'SET_CURRENT_ADMIN':
            stateCopy.isAuthenticated = !!Object.keys(action.payload).length
            stateCopy.admin = action.payload;
            state = stateCopy;
            return state;

        default:
            return state;
    }
}