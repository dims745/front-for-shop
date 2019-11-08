import React, { Component } from 'react';
import './App.css';
import Footer from './pages/footer';
import Header from './pages/header';
import store from './redux';
import { getCategory, getPopular } from './actions';
import { verifyUser } from './pages/auth/actions';
import { Route , Switch} from 'react-router-dom';
import StartPage from './pages/startPage';
import CategoryView from './pages/pageOfCategory';
import Bucket from './pages/bucket';
import ItemPage from './pages/itemPage';
import SearchPage from './pages/searchPage';
import Order from './pages/order';
import Auth from './pages/auth';

store.dispatch(verifyUser());

store.dispatch(getCategory());

store.dispatch(getPopular());

if(sessionStorage.bucket)
    store.dispatch({
        type: 'SET_BUCKET',
        bucket: JSON.parse(sessionStorage.getItem('bucket'))
    });
else
    store.dispatch({
        type: 'SET_BUCKET', bucket: {}
    });

class App extends Component {
  render() {
    return (
        <div className={'general'}>
            <Header />
            <Switch>
                <Route path={['/login', '/signin']} component={Auth}/>

                <Route path={'/bucket'} component={Bucket}/>

                <Route path={'/item'} component={ItemPage}/>

                <Route path={'/category'} component={CategoryView}/>

                <Route path={'/search'} component={SearchPage}/>

                <Route path={'/order'} component={Order}/>

                <Route path={'/'} component={StartPage}/>
            </Switch>
            <Footer />
        </div>
    );
  }
}

export default App;
