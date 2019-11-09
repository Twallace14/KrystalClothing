import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./components/pages/homepage/HomePage";
import shopPage from "./components/pages/shopPage/shopPage";



function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop" component={shopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
