import {applyMiddleware, combineReducers, createStore} from "redux";
import serviceListReducer from "./serviceListReducer";
import thunk from "redux-thunk";
import serviceItemReducer from "./serviceItemReducer";


const rootReducer = combineReducers({
    serviceListReducer,
    serviceItemReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store