const DEFAULT_STATE = {
    isAuthenticated: false,
    user:{}
}

export const authReducer = (state = DEFAULT_STATE, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'GET_USER':
            stateCopy.isAuthenticated = true;
            stateCopy.user = action.payload;
            state = stateCopy;
            return state;
        case 'SET_USER':
            console.log(action.payload)
            return state;
        default:
            return state;
    }
}