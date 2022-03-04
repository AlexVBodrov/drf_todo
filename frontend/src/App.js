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
      <div class="center">

          <h1>TODO App</h1>
          <div>
            <ul class="menu-main">
              <li><a href="#">Главная</a></li>
              <li><a href="#">Услуги</a></li>
              <li><a href="#">Цены</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          
          <br></br>
          <br></br>
          <br></br>

          < UserList users={this.state.users}/>

          <br></br>

          <footer id="footer">
            <p>© 2022 Alex Bodrov</p>
          </footer>


      </div>
    );
  }
}

export default App;
