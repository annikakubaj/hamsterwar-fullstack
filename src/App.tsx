import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
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
          nav 
        </nav>
      
      </header>
      <main>
        före switch 
        <Switch>
          <Route path="/galleri"> Galleri </Route>
          <Route path="/battle"> Battle </Route>
          <Route path="/statistik"> Statistik </Route>
          <Route path="/historik"> Historik </Route>
          <Route path="/"> Välkommen </Route>

        </Switch>
        efter switch 
        main 
      </main>
    </div>
    </Router>
  );
}

export default App;

