import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";

function UserList(props) {
  
  return (
    <Card className={classes.users}>
      <ul>
        {props.userInfo.map((user) => {
          return (
            <li key={user.id} >
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UserList;
