import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css"

const NewTodo: React.FC = () => {
  const {addTodo} = useContext(TodosContext)
  const userInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //if you are NOT sure that the value are never null at this point of the code use "?"
    const enteredTodo = userInputRef.current!.value

    if(enteredTodo.trim().length === 0){
        //throw error
        return
    }
    
    addTodo(enteredTodo)
    userInputRef.current!.value = ""
  };

  return (
    <form onSubmit={submitHandler} className= {classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={userInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
