import React from 'react';
// import logo from './logo.svg';
import './App.css';

import UserList from './components/User';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'users':[]
    }
  }


  componentDidMount() {
    const users = [
      {
        'username': 'nik_user001',
        'first_name': 'user001',
        'last_name': 'user_last001',
        'email': 'user001@ya.ru'
      },
      {
        'username': 'nik_user002',
        'first_name': 'user002',
        'last_name': 'user_last002',
        'email': 'user002@ya.ru'
      }
    ]
    this.setState(
      {
        'users':users
      }
    )
  }


  render() {
    return (
      <div>
          <h1>TODO App</h1>
          < UserList users={this.state.users}/>


      </div>
    );
  }
}

export default App;
