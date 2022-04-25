import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import './components/components.css';

import UserList from './components/User';
import ProjectList from './components/Project';
import TODOList from './components/TODO';
import ProjectForm from './components/ProjectForm';
// import MainMenu from './components/Menu';
import Footer from './components/Footer';
import NotFound404 from './components/NotFound404';
import LoginForm from './components/Auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      projects: [],
      todos: [],
      token: '',
    };
  }

  load_data() {
    const headers = this.get_headers();
    axios
      .get('http://127.0.0.1:8000/api/users/', { headers })
      .then((response) => {
        this.setState({
          users: response.data.results,
        });
      })
      .catch((error) => console.log(error));

    axios
      .get('http://127.0.0.1:8000/api/projects/', { headers })
      .then((response) => {
        this.setState({
          projects: response.data.results,
        });
      })
      .catch((error) => console.log(error));

    axios
      .get('http://127.0.0.1:8000/api/todos/', { headers })
      .then((response) => {
        this.setState({
          todos: response.data.results,
        });
      })
      .catch((error) => console.log(error));
  }

  deleteTodo(id) {
    console.log(id);
    const headers = this.get_headers();
    axios
      .delete(`http://127.0.0.1:8000/api/todos/${id}`, { headers })
      .then((response) => {
        this.load_data();
        // this.setState(
        //   {
        //   todos: this.state.todos.filter((item) => item.id !== id),
        // }
        // );
      })
      .catch((error) => console.log(error));
  }


  set_token(token) {
    // code for local Storage use
    // localStorage.setItem('token', token);
    // let item = localStorage.getItem('token')
    const cookies = new Cookies();
    cookies.set('token', token);
    this.setState({ token: token }, () => this.load_data());
  }

  is_authenticated() {
    return !!this.state.token;
  }

  logout() {
    this.set_token('');
    // reload browser cache
    location.reload(false);
  }

  get_token(username, password) {
    console.log(username, password);
    axios
      .post('http://127.0.0.1:8000/api-token-auth/', {
        username: username,
        password: password,
      })
      .then((response) => {
        // console.log(response.data['token']);
        this.set_token(response.data['token']);
      })
      .catch((error) => alert('Неверный логин или пароль'));
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json',
    };

    if (this.is_authenticated()) {
      headers['Authorization'] = `Token ${this.state.token}`;
    }
    return headers;
  }

  get_token_from_storage() {
    // code for local Storage use
    // localStorage.setItem('token', token);
    // let item = localStorage.getItem('token')
    const cookies = new Cookies();
    const token = cookies.set('token');
    this.setState({ token: token }, () => this.load_data());
  }

  componentDidMount() {
    this.get_token_from_storage();
  }

  render() {
    return (
      <div className="center">
        <h1>TODO App</h1>
        <BrowserRouter>
          {/* <MainMenu /> */}
          <div className="div-menu">
            <nav>
              <ul className="menu-main">
                <li>
                  <Link to="/">Все пользователи</Link>
                </li>
                <li>
                  <Link to="/projects/">Проекты</Link>
                </li>
                <li>
                  <Link to="/todos/">TODO листы</Link>
                </li>
                <li className="login">
                  {this.is_authenticated() ? (
                    <button className="logout" onClick={() => this.logout()}>
                      Logout
                    </button>
                  ) : (
                    <Link to="/login/">Login</Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
          <br />
          <br />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <UserList users={this.state.users} />}
            />
            <Route
              exact
              path="/login"
              component={() => (
                <LoginForm
                  get_token={(username, password) =>
                    this.get_token(username, password)
                  }
                />
              )}
            />
            <Route
              exact
              path="/projects/"
              component={() => <ProjectList projects={this.state.projects} />}
            />
            {/* <Route
              exact
              path="/todos/"
              component={() => <TODOList todos={this.state.todos} />}
            /> */}

            <Route
              exact
              path="/todos/"
              component={() => (
                <TODOList
                  todos={this.state.todos}
                  deleteTodo={(id) => this.deleteTodo(id)}
                />
              )}
            />

            <Route
              exact
              path="/project/create"
              component={() => (
                <ProjectForm createTodo={(text) => this.createTodo(text)} />
              )}
            />
            {/* <Route exact path="/todos/create" component={() => <TodoForm />} /> */}

            <Route component={NotFound404} />
          </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
