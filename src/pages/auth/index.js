import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SigninPage from './SigninPage';

class Auth extends Component {
    render() {
        return (
            <Switch>
                <Route path={'/login'} component={LoginPage}/>
                <Route path={'/signin'} component={SigninPage}/>
            </Switch>
        );
    }
}

export default Auth;