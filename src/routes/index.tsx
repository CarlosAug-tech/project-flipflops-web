import React from 'react';
import { RouteProps, Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';
import Shipping from '../pages/Shipping';
import Checkout from '../pages/Checkout';
import Profile from '../pages/Profile';

interface RProps {
  location?: RouteProps['location'];
}

const Routes: React.FC<RProps> = ({ location }) => {
  return (
    <Switch location={location}>
      <Route path="/" exact component={Home} isHome />

      <Route path="/auth" component={SignIn} isAuth />
      <Route path="/register" component={SignUp} isAuth />

      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/cart" component={Cart} isPrivate location={location} />
      <Route path="/shipping" component={Shipping} isPrivate />
      <Route path="/checkout" component={Checkout} isPrivate />

      <Route path="/dashboard" component={Dashboard} isPrivate isAdmin />
    </Switch>
  );
};

export default Routes;
