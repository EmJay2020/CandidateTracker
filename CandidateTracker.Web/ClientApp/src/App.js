  
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Add } from './Add';
import { ValueContextComponent } from './ValueContext';
import Layout from './layout';
import Pending from './Pending';
import ViewCandidate from './ViewCandidate';
import Refused from './Refused';
import Confirmed from './Confirmed';


export default class App extends Component {

    render() {
      return (
        <ValueContextComponent>
            <Layout>
            <Route exact path='/' component={Add} />
            <Route exact path='/pending' component={Pending} />
            <Route exact path='/viewcandidate/:id' component={ViewCandidate} />
            <Route exact path='/refused' component={Refused}/>
            <Route exact path='/confirmed' component={Confirmed}/>
            </Layout>

        </ValueContextComponent>
      );
    }
  }