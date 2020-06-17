import {applyMiddleware, combineReducers, createStore} from "redux";
import listPageReducer from "./listPageReducer";
import thunk from "redux-thunk";

 const reducers = combineReducers({
   listPage: listPageReducer,
    });

let store = createStore(reducers, applyMiddleware(thunk));

export default store;