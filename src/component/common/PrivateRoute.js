import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  // const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  const isLoggedIn = true;

  return (
    <Route {...rest} render={(props) => (
      (isLoggedIn)
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );
}