import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Metrics from '../Metrics/Metrics';
import * as Api from '../../utils/Api';


function App() {

  const [metrics, setMetrics] = React.useState([])

  React.useState(() => {
    let dataMetrics = []
    Api.getMetrics()
      .then(data => {
        dataMetrics = data.map(item => {
            return {
                shelter: item.shelter,
                day: item.sday,
                week: item.sweek,
                month: item.smonth
            }
        })
        setMetrics(dataMetrics)
      })
}, [])

  return (
    <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/cat">
            <Metrics data={metrics}/>
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
