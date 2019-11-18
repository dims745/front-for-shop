import React, { Component } from 'react';
import './App.css';
import Footer from './pages/footer';
import Header from './pages/header';
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
import { connect } from 'react-redux';

class App extends Component {
  render() {
    this.props.verifyUser();
    this.props.getPopular();
    this.props.getCategory();
    if(sessionStorage.bucket)
        this.props.setBucket(JSON.parse(sessionStorage.getItem('bucket')));
    else
        this.props.setBucket({});
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

export default connect(
    state => ({}),
    dispatch => ({
       verifyUser() {
           dispatch(verifyUser());
        },

       getCategory() {
           dispatch(getCategory())
       },

       getPopular(){
           dispatch(getPopular());
       },

       setBucket(bucket){
            dispatch({
                type: 'SET_BUCKET',bucket
            });  
       }
    })
)(App);
