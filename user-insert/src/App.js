import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (username, age) => {
    console.log('add user');
    setUsersList((preUserList) => {
      return [
        ...preUserList,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
