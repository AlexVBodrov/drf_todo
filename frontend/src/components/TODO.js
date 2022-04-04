import React from "react";

import './components.css';


const TODOItem = ({todo}) => {
    return(
        // возвращаем верстку
        <tbody>
            <tr>
                <td>
                    {todo.id}
                </td>
                <td>
                    {todo.name}
                </td>
                <td>
                    {todo.text}
                </td>
                <td>
                    {todo.author}
                </td>
                <td>
                    {todo.created}
                </td>
                <td>
                    {todo.updated}
                </td>
                <td>
                    {todo.is_active}
                </td>

            </tr>
        </tbody>

    )
}


const TODOList = ({todos}) => {

    return(
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
                </tr>

            </thead>
            {todos.map((todo) => <TODOItem todo={todo}/> )}
        </table>

    )
}

export default TODOList