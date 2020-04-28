import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIndAndSignUpPage from './pages/sign-in-up/sign-in-up.component';
import {auth} from '../src/firebase/firebase.utils';

//This was a stateless component before the implementation of Firebase authentication, after that I needed a state on this component.
class App extends React.Component{

  constructor() {
    super()

    this.state = {
      currentUser : 'null'
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user})

      console.log(user);
    })
  }

  componentWillUnmount() {
    auth.unsubscribeFromAuth();
  }

  render() {

    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignIndAndSignUpPage}/>
        </Switch>
      </div>
    );

  }
}

export default App;
