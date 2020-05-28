import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Homepage from './Pages/Homepage.component';
import ShopPage from './Pages/shop.component';
import './App.css';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </Switch>
  );
}

export default App;
