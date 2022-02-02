import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(reducer, thunk);

export default store;