import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
const AddUser = (props) => {
    const [flag,setFlag] = useState(false);
    const [negative,setNegative] = useState(false);
    const [username,setUsername] = useState('');
    const [age,setAge] = useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        
        if(username.trim().length === 0 || age.toString().trim().length === 0){
            return;
        }
        if(+age < 1)
        {
           return;
        }
        //console.log(username,age);
        props.onAddUser(username,age);
        setUsername('');
        setAge('')
    }
   return(
      
       <Card className = {classes.input}>
            <form onSubmit = {addUserHandler}>
                <label htmlFor = "username">Username</label>
                <input type = "text" id = "username" value = {username} onChange = {(event) => setUsername(event.target.value)}></input>
                <label htmlFor = "age">Age(in years)</label>
                <input type = "number" id = "age" value = {age} onChange = {(event) => setAge(event.target.value)}></input>
                <Button type = "submit">Add User</Button>
            </form>
       </Card>
   );
}

export default AddUser;