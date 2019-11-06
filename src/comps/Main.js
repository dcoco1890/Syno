import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Lookup from '../pages/Lookup';
import Home from '../pages/Home'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/lookup' component={Lookup} />
        </Switch>
    </main>
)

export default Main;