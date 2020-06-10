import {applyMiddleware, combineReducers, createStore} from "redux";
import listPageReducer from "./listPageReducer";
import repositoryPageReducer from "./repositoryPageReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    listPage: listPageReducer,
    repositoryPage: repositoryPageReducer});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;