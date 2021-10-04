import React from "react";
import { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

function AddUser(props) {
  const [userInput, setUserInput] = useState({
    userName: "",
    userAge: "",
  });

  const [isNameValid, setIsNameValid] = useState(false)
  const [isAgeValid, setIsAgeValid] = useState(false)

  function handleName(e) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        userName: e.target.value,
      };
    });
  }

  function handleAge(e) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        userAge: parseFloat(e.target.value),
      };
    });
  }

  function handleUserSubmit(e) {
    e.preventDefault();
    if(userInput.userName.trim() === ""){
      setIsNameValid(false)
      props.validateName(isNameValid)
      return
    }
    else if(userInput.userAge <= 0){
      setIsAgeValid(false)
      props.validateAge(isAgeValid)
      return
    }
    else{
 
    const data = {
      name: userInput.userName,
      age: userInput.userAge,
      id : Math.random().toString()
    };
    props.getUserData(data);
  }

    userInput.userName = "";
    userInput.userAge = "";
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={handleUserSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          value={userInput.userName}
          onChange={handleName}
          id="username"
          type="text"
        />
        <label htmlFor="userage">User Age (years)</label>
        <input
          value={userInput.userAge}
          onChange={handleAge}
          id="userage"
          type="number"
          min = "1"
          step = "1"
        />
        <Button text = {"Add User"} />
      </form>
    </Card>
  );
}

export default AddUser;
