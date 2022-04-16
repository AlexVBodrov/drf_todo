import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });

    // console.log(event.target.name, event.target.value);
  }

  handleSubmit(event) {
    this.props.get_token(this.state.login, this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form className="ui-form" onSubmit={(event) => this.handleSubmit(event)}>
        <div className="form-row">
          <input
            type="text"
            name="login"
            placeholder="login"
            value={this.state.login}
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <div className="form-row">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <p>
          <input type="submit" value="Login" />
        </p>
      </form>
    );
  }
}

export default LoginForm;