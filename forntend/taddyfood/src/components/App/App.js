import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Metrics from '../Metrics/Metrics';
import data from '../../data/data'


function App() {

  console.log(data)
  return (
    <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/cat">
            <Metrics data={data}/>
          </Route>

          <Route path="/dog">

          </Route>

          <Route path="/all">

          </Route>
        </Switch>
        
    </div>
  );
}

export default App;
