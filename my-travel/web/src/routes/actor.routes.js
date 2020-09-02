import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TravelRouteBrowser from '../pages/actor/browser';
import TravelRouteEdit from '../pages/actor/edit';

export default function TravelRouteRoutes() {

    return (
        <Switch>
            <Route exact path="/travelRoute" component={TravelRouteBrowser}/>
            <Route exact path="/travelRoute/new" component={TravelRouteEdit}/>
            <Route exact path="/travelRoute/:id" component={TravelRouteEdit}/>
        </Switch>
    );

}
