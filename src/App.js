import React from 'react';
import { Switch, Route , Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import HomePage from './Pages/Homepage.component';
import ShopPage from './Pages/shop.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up.component';
import Header from './Components/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

       setCurrentUser(userAuth) ;
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route                                           
          exact 
          path='/signin' 
          render={() =>
          this.props.currentUser ? (
            <Redirect to='/' /> 
          ) : (
            <SignInAndSignUp />
          )       
          }
          
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) =>
({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch =>({

  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);