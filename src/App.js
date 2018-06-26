import React, { Component } from 'react';
import {link} from 'react-router-dom';
import { Route} from 'react-router-dom';
import './App.css';
import IssueList from "./issuelist";
import { IssueDetails } from "./IssueDetails";
class App extends Component {
  render() {
    return (
      <div>
      <IssueList />
      <Route exact path="/" component={IssueDetails}/>
      </div>
    );
  }
}

export default App;
