import { useState, Fragment } from "react";
import { TodoCard } from "./TodoCard";

import easyPeasyLogo from "../assets/easy-peasy.logo.png";
import { useStoreActions, useStoreState } from "../store/easy-peasy/hooks";

export const EasyPeasyTodos = () => {
  const { todos, todosCount, todosCompleted } = useStoreState((store) => store);
  const { addTodo } = useStoreActions((store) => store);

  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input) {
      const lastTodo = todos[todos.length - 1];
      addTodo({
        id: lastTodo ? lastTodo.id + 1 : 1,
        title: input,
        completed: false,
      });
      setInput("");
    }
  }
  
  return (
    <Fragment>
      <div className="text-center mr-20">
        <img
          className="mx-auto"
          src={easyPeasyLogo}
          alt="easy-peasy"
          style={{ height: 200 }}
        />

        <form onSubmit={handleSubmit}>
          <div className="flex mt-10">
            <input
              className="px-4 py-2 text-white rounded-md bg-zinc-600 w-full"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a task"
            />
            <button
              className="px-4 py-2 ml-4 font-bold text-white bg-green-500 rounded-md hover:bg-green-400"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-3">
          <h2 className="mt-3 px-4 py-2 font-bold text-white bg-green-500 rounded-md">Todo number: ({todosCount})</h2>
          <h2 className="mt-3 px-4 py-2 font-bold text-white bg-green-500 rounded-md">Completed todos: ({todosCompleted})</h2>
        </div>

      </div>
      <div className="mt-10">
        {todos.map((todo) => {
          return <TodoCard key={todo.id} todo={todo} />;
        })}
      </div>
    </Fragment>
  );
};
