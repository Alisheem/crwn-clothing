import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Homepage from './Pages/Homepage.component';
import ShopPage from './Pages/shop.component';
import Header from './Components/header.component';
import './App.css';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
