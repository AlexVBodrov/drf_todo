import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './components.css';

const TODOItem = ({ todo, deleteTodo }) => {
  return (
    // возвращаем верстку
    <tbody>
      <tr>
        <td>{todo.id}</td>
        <td>{todo.name}</td>
        <td>{todo.text}</td>
        <td>{todo.author}</td>
        <td>{todo.created}</td>
        <td>{todo.updated}</td>
        <td>{todo.is_active.toString()}</td>
        <td>
          <button
            className="delete"
            onClick={() => deleteTodo(todo.id)}
            type="button"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

const TODOList = ({ todos, deleteTodo }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>Text</th>
            <th>author</th>
            <th>created</th>
            <th>updated</th>
            <th>is_active</th>
            <th></th>
          </tr>
        </thead>
        {todos.map((todo) => (
          <TODOItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </table>
      <Link to="/todos/create">Create todo</Link>
    </div>
  );
};

export default TODOList;
