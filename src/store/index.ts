import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RaMClient from "../api-client/api-client";
import { ApiClient } from "../types/api-client-types";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

const RaMAPI: ApiClient = new RaMClient();

export {
    store,
    RaMAPI
};