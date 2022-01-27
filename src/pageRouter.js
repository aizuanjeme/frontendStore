import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Create from './pages/exercise/Create';
import Exercises from './pages/exercise/Exercises';
import ViewExercise from './pages/exercise/ViewExercise';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

export default function PageRouter() {
    return <>
        <Switch>
            {/* <Route exact path="/" component={Dashboard} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/exercises" component={Exercises} />
            <Route exact path="/exercise/view" component={ViewExercise} />
            <Route exact path="/exercise/add" component={Create} />




        </Switch>
    </>;
}
