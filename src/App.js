import React, { Component } from 'react';
import SignupForm from './components/SignupForm/SignupForm';
import MainPage from './components/MainPage/MainPage';
import HomePage from './components/HomePage/HomePage';
import AddAnExpense from './components/MainPage/AddAnExpense';
import CreateGroup from './components/Groups/CreateGroup'; // Adjusted path
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/signup" exact>
          <SignupForm />
        </Route>
        <Route path="/mainpage" exact>
          <MainPage />
        </Route>
        <Route path="/addexpense" exact>
          <AddAnExpense />
        </Route>
        <Route path="/creategroup" component={CreateGroup} />
      </Router>
    );
  }
}

export default App;