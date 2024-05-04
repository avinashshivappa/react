//5
//createSore is deprecated
//use configureStore


import { createStore } from "redux";
import rootReducer from "./components/reducers/index";

const Store = createStore(rootReducer);

export default Store;
