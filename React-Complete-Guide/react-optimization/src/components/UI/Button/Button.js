import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log("button running")
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

//By using this on the button the component is still being re-evaluated 
//This happens because the function in the app components is being recreated everytime App component changes
//And this function is passed down as props to this component (onClick)
//The function is passed down as an object to React to compara with the prev props state
export default React.memo(Button);
