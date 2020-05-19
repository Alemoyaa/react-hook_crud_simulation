import React, {useState} from 'react';
import UserTable from "./components/userTable";
import AddUserForm from "./components/addUserForm";
import EditUserForm from "./components/editUserForm";
import {v4 as uuidv4} from "uuid";

function App() {

    const usersData = [
        {id: uuidv4(), name: 'Tania', username: 'floppydiskette'},
        {id: uuidv4(), name: 'Craig', username: 'siliconeidolon'},
        {id: uuidv4(), name: 'Ben', username: 'benisphere'},
    ]

    // State
    const [users, setUsers] = useState(usersData);
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        id: null, name: '', username: ''
    });

    // Functions
    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({
            id: user.id, name: user.name, username: user.username
        })
    }

    const addUser = (user) => {
        user.id = uuidv4();
        setUsers([...users, user])
    }

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <div className="container">
            <h1>CRUD con Hooks</h1>
            <p>Aplicación desarrollada en React utilizando las librerías
                <a href="https://www.npmjs.com/package/react-hook-form"> "react-hook-form" </a>
                y
                <a href="https://www.npmjs.com/package/uuid"> "uuid" </a>
            </p>
            <div className="flex-row">
                <div className="flex-large">
                    {
                        editing ? (
                                <div>
                                    <h2>Editar usuarios</h2>
                                    <EditUserForm currentUser={currentUser}
                                                  updateUser={updateUser}/>
                                </div>
                            ) :
                            (
                                <div>
                                    <h2>Agregar usuarios</h2>
                                    <AddUserForm addUser={addUser}/>
                                </div>
                            )
                    }
                </div>

                <div className="flex-large">
                    <h2>Ver usuarios</h2>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
                </div>
            </div>
        </div>
    );
}

export default App;
