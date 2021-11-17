import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
//import { Transition } from "react-transition-group";

const animationDuration = {
  enter: 400,
  exit: 1000,
};

/*
const Modal = (props) => {
  
  return (
    <Transition
      in={props.show}
      timeout={animationDuration}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const cssClasses = [
          "modal",
          state === "entering"
            ? "modalOpen"
            : state === "exiting"
            ? "modalClosed"
            : null,
        ];

        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};
*/

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationDuration}
      mountOnEnter
      unmountOnExit
      /*classNames = "fade-slide" will switch between classes with fade-slide */
      classNames = {{
        enter: "",
        enterActive: "modalOpen",
        exit: "",
        exitActive: "modalClosed"
      }}
    >
      <div className= "modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
