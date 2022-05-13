import { useEffect, useState } from "react";
import { TodoCard } from "./TodoCard";

import easyPeasyLogo from "../assets/easy-peasy.logo.png";
import { useStoreActions, useStoreState } from "../store/easy-peasy/hooks";

export const EasyPeasyTodos = () => {
  const { todos, todosCount, todosCompleted } = useStoreState((store) => store);
  const { addTodo } = useStoreActions((store) => store);

  const [input, setInput] = useState("");

  function handleSubmit() {
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
    <div className="text-center">
      <img
        className="mx-auto"
        src={easyPeasyLogo}
        alt="easy-peasy"
        style={{ height: 200 }}
      />
      <h1>Easy Peasy Store ({todosCount})</h1>
      <h2>Completed todos ({todosCompleted})</h2>

      <div className="flex mt-10">
        <input
          className="px-2 py-1 text-white rounded-md bg-zinc-600 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 ml-4 font-bold text-white bg-green-500 rounded-md hover:bg-green-400"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="mt-10">
        {todos.map((todo) => {
          return <TodoCard key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};
