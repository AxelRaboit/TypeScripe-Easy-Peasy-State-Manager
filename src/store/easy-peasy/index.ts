import { action, Action, computed, Computed, createStore } from "easy-peasy";
import { Todo } from "../types";

export interface EasyPeasyStore {
  todos: Todo[];
  todosCount: Computed<this, number>;
  addTodo: Action<this, Todo>;
  deleteTodo: Action<this, Todo>;
}

const initialState = {
  todos: [
    /* {
      id: 1,
      title: "This is a todo example",
    },
    {
      id: 2,
      title: "This is another todo example",
    }, */
  ] as Todo[],
};

export const store = createStore<EasyPeasyStore>({
  ...initialState,
  todosCount: computed((state) => {
    return state.todos.length;
  }),
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  deleteTodo: action((state, payload) => {
    state.todos = state.todos.filter(todo => todo.id !== payload.id);
  })
});
