import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import App from "./components/App";
import { ApolloProvider } from "react-apollo";
import { API_URL } from "./config";

import "./index.css";

const client = new ApolloClient({
    uri: API_URL,
});

const AppContainer = () => (

    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

ReactDOM.render(<AppContainer />, document.getElementById("root"));
