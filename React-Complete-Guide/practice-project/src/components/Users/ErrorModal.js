import React from "react";
import { useState } from "react";
import classes from "./ErrorModal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

function ErrorModal(props) {

  const [isClicked, setIsClicked] = useState (true)

  function handleModalClosure(){
    setIsClicked(true)
    props.getModalState(isClicked)
  }
  
  return (
    <div className={classes.backdrop} onClick = {handleModalClosure}>
        <Card className = {classes.modal}>
          <header className={classes.header}>
            <h2 className={classes.h2}>Invalid Ipunt</h2>
          </header>
          <div className={classes.content}>
            <p>{props.text}</p>
          </div>
          <div className={classes.actions}>
            <Button  text = {"Try again"}/>
          </div>
        </Card>
    </div>
  );
}

export default ErrorModal;
