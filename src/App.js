import React, { Component } from 'react';
import AddNewUserForm from './AddNewUserForm';
import Users from './Users';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [],
    error: '',
    showUsersGames: true
  }

  addUser = (user) => {
    this.setState((prevState) => {
      const userNameExist = [...prevState.users].some(prevStateUser => prevStateUser.userName === user.userName);
      if (!userNameExist) {
        return {
          users: [...prevState.users, user],
          error: ''
        }
      } else {
        return { error: 'username already exists please try with another one' }
      }
    })
  }

  toggleUsersGames = () => {
    this.setState((prevState) => ({
        showUsersGames: !prevState.showUsersGames
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <h1 className="App-title">Adding Users and their games</h1>
          <AddNewUserForm addUser={this.addUser} error={this.state.error} />
          <Users users={this.state.users} toggleUsersGames={this.toggleUsersGames} showGames={this.state.showUsersGames} />
        </header>
      </div>
    );
  }
}

export default App;
