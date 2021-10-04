import React from "react";
import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import ErrorModal from "./components/Users/ErrorModal";
import UserList from "./components/Users/UserList";

function App() {
  const [info, setInfo] = useState([]);

  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  function handleUserData(data) {
    setInfo((prevState) => {
      return [data, ...prevState];
    });
  }

  function checkName(name) {
    setIsNameValid(name);
  }

  function checkAge(age) {
    setIsAgeValid(age);
  }

  function closeModal(value) {
    setIsNameValid(value);
    setIsAgeValid(value);
  }

 

  let content = (
  <h1 style = {{textAlign: "center", color: "white"}}>No users yet</h1>
  )
  
  if(info.length > 0){
    content = <UserList userInfo={info}/>
  }

  return (
    <div>
      <AddUser
        getUserData={handleUserData}
        validateName={checkName}
        validateAge={checkAge}
      />
      {!isNameValid && (
        <ErrorModal
          getModalState={closeModal}
          text={"Please enter a valid name"}
        />
      )}
      {!isAgeValid && (
        <ErrorModal
          getModalState={closeModal}
          text={"Please enter a valid age e.g (age > 0)"}
        />
      )}
      {content}
    </div>
  );
}

export default App;
