import React from 'react';
import axios from 'axios';
import './App.css';

import UserList from './components/User';
import ProjectList from './components/Project';
import TODOList from './components/TODO';
import MainMenu from './components/Menu';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'users':[],
      'projects':[],
      'todos':[],
    }
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/').then(response => {
      this.setState(
        {
          'users': response.data
        }
      )}).catch(error => console.log(error))

      axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
        this.setState(
          {
            'projects': response.data
          }
        )}).catch(error => console.log(error))

      axios.get('http://127.0.0.1:8000/api/todos/').then(response => {
        this.setState(
          {
            'todos': response.data
          }
        )}).catch(error => console.log(error))
  }


  render() {
    return (
      <div className="center">

          <MainMenu />

          <h1>TODO App</h1>
          
          <UserList users={this.state.users}/>

          <br/>

          <ProjectList projects={this.state.projects}/>


          <TODOList todos={this.state.todos}/>

          

          <Footer />


      </div>
    );
  }
}

export default App;
