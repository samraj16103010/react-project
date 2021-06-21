import React, {  useRef, useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const AddUser = (props) => {
    //const [username,setUsername] = useState('');
    //const [age,setAge] = useState('');
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error,setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(nameInputRef.current.value);
        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        
        if(enteredUsername.trim().length === 0 || enteredAge.toString().trim().length === 0){
            setError({
                title:'Invalid input!',
                message:'Please Enter Valid Username and Password.'
            })
            return;
        }
        if(+enteredAge < 1)
        {
            setError({
                title:'Invalid age',
                message:'Age must be greater than 0.'
            })
           return;
        }
        //console.log(username,age);
        props.onAddUser(enteredUsername,enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        //setUsername('');
        //setAge('')
    }

    const errorHandler = () => {
        setError(null);
    }

   return(
      
       <Wrapper>
           {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
           <Card className = {classes.input}>
                <form onSubmit = {addUserHandler}>
                    <label htmlFor = "username">Username</label>
                    <input autoComplete = "off" type = "text" id = "username" ref = {nameInputRef}></input>
                    <label htmlFor = "age">Age(in years)</label>
                    <input autoComplete = "off" type = "number" id = "age" ref = {ageInputRef}></input>
                    <Button type = "submit">Add User</Button>
                </form>
            </Card>
       </Wrapper>
   );
}

export default AddUser;