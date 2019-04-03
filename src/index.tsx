import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import App from "./components/App";
import { ApolloProvider } from "react-apollo";

import "./index.css";

export const STATIC_SERVER = process.env.REACT_APP_STATIC_URL || "http://localhost:1337/";
const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL || "http://localhost:1337/graphql"
});

const AppContainer = () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);

ReactDOM.render(<AppContainer/>, document.getElementById("root"));
