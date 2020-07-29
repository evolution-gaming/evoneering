import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import ApolloClient from "apollo-boost";
import App from "./components/App";
import { ApolloProvider } from "react-apollo";
import { API_URL } from "./config";
import { Bootcamp } from "./components/bootcamp/Bootcamp";

import "./index.css";

const client = new ApolloClient({
    uri: API_URL,
});

const AppContainer = () => (

    <BrowserRouter>
        <Switch>
            <ApolloProvider client={client}>
            <Route exact path="/scalabootcamp" component={Bootcamp} />
            <Route path="/" component={App} />
            </ApolloProvider>
        </Switch>
    </BrowserRouter >
);

ReactDOM.render(<AppContainer />, document.getElementById("root"));
