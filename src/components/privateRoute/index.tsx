import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

interface PrivateRouteProps{
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({path,  component: Component, ...rest}) => {
    const isLogged = cookies.get('isLogged');

    if (isLogged == 'OK') {
      return <Route path={path} component={Component} {...rest} />
    }
    else{
      return <Redirect to = "/login" />;
    }
};

export default PrivateRoute;