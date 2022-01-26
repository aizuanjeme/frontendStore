import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/Login';
import Register from './pages/register/Register';

export default function PageRouter() {
    return <>
        <Switch>
            {/* <Route exact path="/" component={Dashboard} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

        </Switch>
    </>;
}
