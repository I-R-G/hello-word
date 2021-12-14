import NewTodo from "./components/NewTodo";
import TodosList from "./components/TodoList";
import TodosContextProvider from "./store/todos-context";

function App() {

  return (
    <TodosContextProvider>
      <NewTodo />
      <TodosList />
    </TodosContextProvider>
  );
}

export default App;
