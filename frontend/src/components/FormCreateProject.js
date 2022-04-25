import React, { Component } from 'react';

export class FormProject extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            link_repository: "",
            users_list: 0
        }
    }


    handleNameChange = event => {
        this.setState({ name: event.target.value })
    }

    handleLRChange = event => {
        this.setState({ link_repository: event.target.value })
    }

    handleIdChange = event => {
        this.setState({ users_list: event.target.value })
    }

    handleSubmit = event => {
        this.props.createProject(
            this.state.name,
            this.state.link_repository,
            this.state.users_list
        )
        event.preventDefault();
    }

    render(){
      return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Project Name</label>
                    <input
                        type="text"
                        value={this.state.name} 
                        onChange={this.handleNameChange}
                    />
                </div>
                <div>
                    <label>Link repository</label>
                    <input
                        type="text"
                        value={this.state.link_repository} 
                        onChange={this.handleLRChange}
                    />
                </div>
                <div>
                    <label>User ID</label>
                    <input
                        type="number"
                        value={this.state.users_list} 
                        onChange={this.handleIdChange}
                    />
                </div>
                <button type="submit">Create Project</button>
            </form>
        </div>
      )
    }
  }
  
  export default FormProject