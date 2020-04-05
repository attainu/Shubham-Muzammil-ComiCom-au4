import { createStore, applyMiddleware, compose, combineReducers,  } from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./auth"

const rootReducers = combineReducers({
    auth: authReducer
});

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;