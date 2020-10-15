import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//pages import
import landing from './pages/landing';
import orphanagesmap from './pages/orphanagesmap';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={landing} />
                <Route path="/app" component={orphanagesmap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;