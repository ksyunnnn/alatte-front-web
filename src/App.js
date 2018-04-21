import React, { Component } from 'react';
import './index.css'

import { Header, Contents } from './components'

class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
     users: [],
   }

   this.pushUserAction = this.pushUserAction.bind(this);
 }
 fetchUserAllAction () {

 }

 pushUserAction(first,last,born) {

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
          pushUserAction={this.pushUserAction}
          />
      </div>
    );
  }
}

export default App;
