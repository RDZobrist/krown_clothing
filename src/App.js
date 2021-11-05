import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import {  auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { selectCurrentUser } from './redux/user/user.selector';
import { fetchCollectionStartAsync } from '../src/redux/shop/shop.actions';
import AdminDashboard from './pages/addmin/addProduct/addProduct.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, fetchCollectionStartAsync } = this.props;
    // fetchCollectionStartAsync();

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
        <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/checkout'
            component={CheckoutPage}

          />
          <Route
            path='/shop'
            component={ShopPage}
          />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
               <Route
            exact
            path='/admin'
            component={AdminDashboard}
          />
        </Switch>
        </Fragment>    );
  }
}

const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser });

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
