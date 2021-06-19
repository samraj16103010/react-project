import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
   return(
       <Card className = {classes.input}>
            <form onSubmit = {addUserHandler}>
                <label htmlFor = "username">Username</label>
                <input type = "text" id = "username"></input>
                <label htmlFor = "age">Age(in years)</label>
                <input type = "number" id = "age"></input>
                <button type = "submit">Add User</button>
            </form>
       </Card>
   );
}

export default AddUser;