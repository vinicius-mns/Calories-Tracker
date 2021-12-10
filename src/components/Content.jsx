import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Calendar_tracker from '../pages/Calendar_tracker';
import Weigth_tracker from '../pages/Weight_tracker';

export default function Rotas() {
  return(
    <div>
      <Switch>
        <Route path="/calendar_tracker" component={ Calendar_tracker }/>
        <Route path="/weight_tracker" component={ Weigth_tracker }/>
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
}
