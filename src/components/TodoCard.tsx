import React, { Fragment, useRef, useState } from "react";
import { useStoreActions } from "../store/easy-peasy/hooks";
import { Todo } from '../store/types'

interface Props {
  todo: Todo
}

export const TodoCard = ({ todo }: Props) => {

  const { deleteTodo, toggleTodo, updateTodo } = useStoreActions((store) => store);

  const [editing, setEditing] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>();

  const handleDelete = (todo: Todo) => {
    deleteTodo(todo);
  }
  
  const handleToggle = (todo: Todo) => {
    toggleTodo(todo);
  }
  
  const handleEditing = (todo: Todo) => {
    setEditing(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(editTitle) {
      updateTodo({id: todo.id, title: editTitle, completed: todo.completed })
    }
    setEditing(false);
  }

  const onChangeEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  }

  const handleCancelEdit = () => {
    setEditing(false);
    setEditTitle('');
};

  return (
    <div
      className="w-96 flex px-4 py-4 mb-4 text-base font-light text-left text-gray-900 bg-green-500 rounded-md"
      style={{backgroundColor: todo.id % 2 == 0 ? "grey" : ""}}
    >
      <div className="w-full">
        {
          !editing
            ? (
              <Fragment>
                <div className="ml-4 text-lg font-medium text-white"
                  style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                  {todo.title}
                </div>
                <button 
                  className="m-2 px-4 py-2 mt-3 w-3/12 font-bold text-white bg-green-600 rounded-md hover:bg-green-400"
                  onClick={() => handleToggle(todo)}>{todo.completed ? 'Todo' : 'Done'}
                </button>

                {!todo.completed && (
                  <button 
                    className="m-2 px-4 py-2 mt-3 w-3/12 font-bold text-white bg-green-600 rounded-md hover:bg-green-400"
                    onClick={() => handleEditing(todo)}
                    >Edit
                  </button>
                )}
                
                <button 
                  className="m-2 px-4 py-2 mt-3 w-3/12 font-bold text-white bg-green-600 rounded-md hover:bg-green-400"
                  onClick={() => handleDelete(todo)}>Delete
                </button>
              </Fragment>
            )
            : (
              <form onSubmit={handleSubmit}>
                <input className="px-4 py-2 rounded-md w-full" type="text" defaultValue={todo.title} onChange={(e) => onChangeEditTitle(e)} />
                <div>
                  <button
                    className="m-2 px-4 py-2 mt-3 w-3/12 font-bold text-white bg-green-600 rounded-md hover:bg-green-400"
                    type="submit"
                  >Update</button>
                  <button
                    className="m-2 px-4 py-2 mt-3 w-3/12 font-bold text-white bg-green-600 rounded-md hover:bg-green-400"
                    type="button"
                    onClick={handleCancelEdit}
                  >Cancel</button>
                </div>
              </form>
            )
        }
      </div>
    </div>
  );
};
