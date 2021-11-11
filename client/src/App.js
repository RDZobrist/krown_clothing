import React, {lazy, Suspense, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import Header from './components/header/header.component';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { GlobalStyle} from './global.styles'
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { selectCartItemsCount } from './redux/cart/cart.selectors';
import ContactUsPage from './pages/contact-us/contact-us.page.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const AdminDashboard = lazy(() => import('./pages/admin-dashboard/admin-dashboard.component'))

const App = ({ checkUserSession, currentUser, cartItems }) => {

  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])

    return (
<div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route  path='/contactus' component={ContactUsPage} />
            <Route path='/shop' component={ShopPage} />

            <Route 
            exact 
            path='/checkout'
            render={()=> 
              cartItems  ? <CheckoutPage /> : <Redirect to='/shop' />}
            />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);