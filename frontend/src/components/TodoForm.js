import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', author: 0 };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state.name);
    console.log(this.state.author);

    this.props.createBook(this.state.name, this.state.author);
    event.preventDefault();
  }

  render() {
    return (
      <form className="ui-form" onSubmit={(event) => this.handleSubmit(event)}>
        <div className="form-row">
          <label htmlFor="login">name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="author">author</label>
          <input
            type="number"
            name="author"
            value={this.state.author}
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default TodoForm;
