import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';


const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = (initialState=[]) => {

      const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add todo",
      payload: todo,
    };

    dispatch(action);
  };
  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove todo",
      payload: id,
    };

    dispatch(action);
    // dispatch({
    //   type: "[TODO] Remove todo",
    //   payload: id,
    // });
  };

  const handleToggleTodo = (id) => {
    // console.log({id})
    dispatch({
      type: "[TODO] Toggle todo",
      payload: id,
    });
  };
    

    return {
        ...initialState,
        initialState,
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        pendingTodos: todos.filter(todo => !todo.done).length,
        todosCount: todos.length
    }
}
