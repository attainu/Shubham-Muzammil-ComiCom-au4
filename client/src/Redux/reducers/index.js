import { createStore, applyMiddleware, compose, combineReducers,  } from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./auth"
import {productReducer} from './product'
import {featureReducer} from './feature'

const rootReducers = combineReducers({
    auth: authReducer,
    product:productReducer,
    feature: featureReducer

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