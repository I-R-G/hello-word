import React from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./TodoList.module.css";

//React.FC will enabe the native props e.g (props.children)
//<> will then merge our property types with the React.FC
const TodosList: React.FC = () => {

  const {items, removeTodo} = useContext(TodosContext)

  return (
    <ul className={classes.todos}>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default TodosList;
