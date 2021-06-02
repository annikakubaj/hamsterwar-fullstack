import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
import Nav from './components/nav/Nav';
import Gallery from './components/gallery/Gallery'
import Battle from './components/battle/Battle'
import Statistics from './components/statistics/Statistics'
import History from './components/history/History'
import Start from './components/start/Start'
// import Hamsterwarslogoo from './Hamsterwarslogoo.svg'
import './App.css';
import Form from './components/gallery/Form';


function App() {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Nav />
      
      </header>
      <main>

       
        
        <Switch>
          <Route path="/form"> <Form /> </Route>
          <Route path="/galleri"> <Gallery /> </Route>
          <Route path="/battle"> <Battle /> </Route>
          <Route path="/battel">
            <Redirect to="/battle" />
          </Route>
          <Route path="/statistik"> <Statistics /> </Route>
          <Route path="/historik"> <History /> </Route>
          <Route path="/"> <Start /> </Route>
          

        </Switch>
        
        
      </main>
    </div>
    </Router>
  );
}

export default App;

