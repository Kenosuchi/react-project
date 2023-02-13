import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (validateInput(username, age)) {
      props.onAddUser(username, age);
      resetInput();
    }
  };

  const resetInput = () => {
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const validateInput = (username, age) => {
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and/or age (non empty value).',
      });
      return false;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (greater than 0).',
      });
      return false;
    }
    return true;
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' ref={usernameInputRef}></input>
          </div>
          <div>
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='number' ref={ageInputRef}></input>
          </div>
          <div>
            <Button type='submit'>Add User</Button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
