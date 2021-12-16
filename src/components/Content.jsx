import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import CalendarTracker from '../pages/CalendarTracker';
import WeigthTracker from '../pages/WeightTracker';
import '../styles/content.css'

export default function Rotas() {
  return(
    <div className='father'>
      <Switch>
        <Route path="/Calendar_tracker/:monthPath" component={ CalendarTracker }/>
        <Route path="/Weight_tracker" component={ WeigthTracker }/>
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
}
