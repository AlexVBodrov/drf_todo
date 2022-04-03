import React from "react";

import './components.css';


const UserItem = ({user}) => {
    return(
        // возвращаем верстку
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}


const UserList = ({users}) => {

    return(
        <table className="table">
            <th>Username</th>
            <th>First name</th>
            <th>Last name</th>
            <th>email</th>
            {users.map((user) => <UserItem user={user}/> )}
        </table>

    )
}

export default UserList