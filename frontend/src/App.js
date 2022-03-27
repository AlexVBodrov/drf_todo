import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

import UserList from './components/User';
import MainMenu from './components/Menu';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'users':[]
    }
  }


  componentDidMount() {
    // const users = [
    //   {
    //     'username': 'nik_user001',
    //     'first_name': 'user001',
    //     'last_name': 'user_last001',
    //     'email': 'user001@ya.ru'
    //   },
    //   {
    //     'username': 'nik_user002',
    //     'first_name': 'user002',
    //     'last_name': 'user_last002',
    //     'email': 'user002@ya.ru'
    //   }
    // ]
    axios.get('http://127.0.0.1:8000/api/users/').then(response => {

      this.setState(
        {
          'users': response.data
        }
      )}).catch(error => console.log(error))
  }


  render() {
    return (
      <div class="center">

          <MainMenu />

          <h1>TODO App</h1>
          
          <UserList users={this.state.users}/>

          <Footer />


      </div>
    );
  }
}

export default App;
