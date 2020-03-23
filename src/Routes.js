import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./views/Home";
import Service from "./views/Service";
import Company from "./views/Company"
import Contact from "./views/Contact"
import Recruit from "./views/Recruit"


export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Redirect
                    exact
                    from="/"
                    to="/Home"
                />
                <Route
                    component={Home}
                    exact
                    path="/Home"
                />
                <Route
                    component={Service}
                    exact
                    path="/Service"
                />
                <Route
                    component={Company}
                    exact
                    path="/Company"
                />
                <Route
                    component={Recruit}
                    exact
                    path="/Recruit"
                />
                <Route
                    component={Contact}
                    exact
                    path="/Contact"
                />

            </Switch>
        )
    }
}
