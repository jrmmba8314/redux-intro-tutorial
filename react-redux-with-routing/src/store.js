import { createStore, combineReducers } from "redux";
import homePage from "./containers/homepage/reducers"

const reducers = combineReducers({ homePage });

export default createStore(reducers);
