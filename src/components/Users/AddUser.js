import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
    const [username,setUsername] = useState('');
    const [age,setAge] = useState('');
    const [error,setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        
        if(username.trim().length === 0 || age.toString().trim().length === 0){
            setError({
                title:'Invalid input!',
                message:'Please Enter Valid Username and Password.'
            })
            return;
        }
        if(+age < 1)
        {
            setError({
                title:'Invalid age',
                message:'Age must be greater than 0.'
            })
           return;
        }
        //console.log(username,age);
        props.onAddUser(username,age);
        setUsername('');
        setAge('')
    }

    const errorHandler = () => {
        setError(null);
    }

   return(
      
       <div>
           {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
           <Card className = {classes.input}>
            <form onSubmit = {addUserHandler}>
                <label htmlFor = "username">Username</label>
                <input type = "text" id = "username" value = {username} onChange = {(event) => setUsername(event.target.value)}></input>
                <label htmlFor = "age">Age(in years)</label>
                <input type = "number" id = "age" value = {age} onChange = {(event) => setAge(event.target.value)}></input>
                <Button type = "submit">Add User</Button>
            </form>
       </Card>
       </div>
   );
}

export default AddUser;