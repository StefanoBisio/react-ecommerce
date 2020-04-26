import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIndAndSignUpPage from './pages/sign-in-up/sign-in-up.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignIndAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
