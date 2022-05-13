import React from "react";
import { useStoreActions } from "../store/easy-peasy/hooks";
import { Todo } from '../store/types'


interface Props {
  todo: Todo
}

export const TodoCard = ({ todo }: Props) => {

  const { deleteTodo, toggleTodo } = useStoreActions((store) => store);

  const handleDelete = (todo: Todo) => {
    deleteTodo(todo);
  }
  const handleToggle = (todo: Todo) => {
    toggleTodo(todo);
  }

  return (
    <div className="w-96 flex px-4 py-4 mb-4 text-base font-light text-left text-gray-900 bg-white rounded-md">
      <div className="w-full">
        <div className="ml-4 text-lg font-medium"
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </div>
        <button 
          className="m-2 px-4 py-2 mt-3 w-4/12 font-bold text-white bg-green-500 rounded-md hover:bg-green-400"
          onClick={() => handleDelete(todo)}>Delete
        </button>
        <button 
          className="m-2 px-4 py-2 mt-3 w-4/12 font-bold text-white bg-green-500 rounded-md hover:bg-green-400"
          onClick={() => handleToggle(todo)}>{todo.completed ? 'Todo' : 'Done'}
        </button>
      </div>
    </div>
  );
};
