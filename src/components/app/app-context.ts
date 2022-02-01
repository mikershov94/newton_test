import React from "react";
import ApiClient from "../../api-client";
import RaMClient from "../../api-client/api-client";
import { AppContext } from "../../types/api-client-types";

const RaMAPI: ApiClient = new RaMClient();
const RaMContext = React.createContext({} as AppContext);

export{
    RaMAPI,
    RaMContext
}