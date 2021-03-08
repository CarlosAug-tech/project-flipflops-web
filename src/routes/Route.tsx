import React from 'react';
import {
  RouteProps as DOMRouteProps,
  Route as DOMRoute,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

interface RouteProps extends DOMRouteProps {
  isPrivate?: boolean;
  isAuth?: boolean;
  isHome?: boolean;
  isAdmin?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isAuth = false,
  isHome = false,
  isAdmin = false,
  component: Component,
  location,
  ...rest
}) => {
  const { user } = useAuth();

  if (user && user.email !== process.env.SUPER_USER && isAdmin) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  }

  if (!user && isPrivate) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  }

  if (user && isAuth) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  }

  const Layout = isAuth ? AuthLayout : DefaultLayout;

  return (
    <DOMRoute
      {...rest}
      render={() => (
        <Layout isHome={isHome} isPrivate={isPrivate}>
          <Component />
        </Layout>
      )}
    />
  );
};

export default Route;
