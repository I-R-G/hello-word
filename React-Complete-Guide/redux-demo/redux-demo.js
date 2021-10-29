const redux = require("redux");

//Function which will update the store state
function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1
    };
  };
  if(action.type === "DECREMENT"){
      return {
          counter: state.counter - 1
      };
  };
  return state
}
//Creates the store
const store = redux.createStore(counterReducer);

function counterSubscriber() {
  const latestState = store.getState();
  console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({type: "DECREMENT"})
