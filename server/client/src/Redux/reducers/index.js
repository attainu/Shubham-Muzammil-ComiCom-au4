import { createStore, applyMiddleware, compose, combineReducers,  } from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./auth"
import {adminReducer} from "./admin"
import {productReducer} from './product'
import {featureReducer} from './feature'
import {errorReducer} from './error'

const rootReducers = combineReducers({
    auth: authReducer,
    product:productReducer,
    feature: featureReducer,
    admin: adminReducer,
    error: errorReducer
});

const saveToLocalStorage = (state) =>{
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("featureState", serializedState)
    } catch (error) {
        console.log(error)
    }
}

const loadFromLocalStorage = () =>{
    try {
        const serializedState = localStorage.getItem("featureState")
        if(serializedState===null){
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        console.log(error)
        return undefined
    }
}
const persistedState = loadFromLocalStorage();

const store = createStore(
    rootReducers,
    persistedState,
    compose(
        applyMiddleware(thunk)
    )
);

store.subscribe(() => {
    saveToLocalStorage({
        feature : store.getState().feature  //this will only save feature state
    })
});

export default store;