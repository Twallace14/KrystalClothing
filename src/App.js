import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from "./components/pages/homepage/HomePage";
import shopPage from "./components/pages/shopPage/shopPage";
import Header from './components/header/Header';
import SignIn from './components/pages/signInPage/SignIn';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { setCurrentUser } from './redux/user/userAction'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    
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

      setCurrentUser(userAuth);
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
          <Route path="/shop" component={shopPage} />
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signin"
            render={() => 
            this.props.currentUser ? (
              <Redirect to='/shop' />
            ) : (

                <SignIn />
              )
            }

          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  CurrentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
