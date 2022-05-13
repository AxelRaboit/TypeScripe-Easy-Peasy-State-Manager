import React from "react";
import { useStoreActions } from "../store/easy-peasy/hooks";
import { Todo } from '../interfaces'


interface Props {
  todo: Todo
}

export const TodoCard = ({ todo }: Props) => {

  const { deleteTodo } = useStoreActions((store) => store);

  const handleDelete = (todo: Todo) => {
    deleteTodo(todo);
  }

  return (
    <div className="flex px-4 py-4 mb-4 text-base font-light text-left text-gray-900 bg-white rounded-md">
      <div className="w-full">
        <div className="ml-4 text-lg font-medium">
          {todo.title}
          
        </div>
        <button 
          className="px-4 py-2 mt-3 w-full font-bold text-white bg-green-500 rounded-md hover:bg-green-400"
          onClick={() => handleDelete(todo)}>Delete
        </button>
      </div>
    </div>
  );
};
