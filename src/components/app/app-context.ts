import React from "react";
import ApiClient from "../../api-client";
import { IApiClient, IAppContext } from "../../types/api-client-types";

const RaMAPI: IApiClient = new ApiClient();
const RaMContext = React.createContext({} as IAppContext);

export{
    RaMAPI,
    RaMContext
}