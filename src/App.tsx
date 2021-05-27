import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
import Gallery from './components/gallery/Gallery'
import Battle from './components/battle/Battle'
import Statistics from './components/statistics/Statistics'
import History from './components/history/History'
import Start from './components/start/Start'
import './App.css';


function App() {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/"> Start </Link>
          <Link to="/galleri"> Galleri </Link>
          <Link to="/battle"> Battle </Link>
          <Link to="/statistik"> Statistik </Link>
          <Link to="/historik"> Historik </Link>
         
        </nav>
      
      </header>
      <main>
        
        <Switch>
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

