import React, { Component } from 'react';
import './index.css'
import {HashRouter, Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";

import { Header, Contents, Home, User, Signup } from './components';
import Host from './Host';

class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
     users: [],
   }
 }
 fetchUserAllAction () {

 }
 renderUsers() {
    // this.fetchUserAllAction().then(res => {
    //     this.setState({
    //       users: res,
    //     });
    //     console.log(res);
    //   }).catch(error => {
    //     console.warn('Error getting documents: ', error);
    //   });
  }

  componentDidMount() {
    this.renderUsers();
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Contents
          users={this.state.users}
          >
          <Switch>
              {[
                {
                  path: '/',
                  component: Home,
                },
                {
                  path: '/user/1',
                  component: User,
                },
                {
                  path: '/host/1',
                  component: Host,
                },
                {
                  path: '/signup',
                  component: Signup,
                },
              ].map((v,i) => {
                return <Route key={i} exact path={v.path} component={v.component} />;
              })}
          </Switch>
        </Contents>
      </div>
    );
  }
}

export default App;
