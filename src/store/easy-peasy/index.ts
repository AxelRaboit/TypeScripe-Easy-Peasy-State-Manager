import { action, Action, computed, Computed, createStore } from "easy-peasy";
import { Todo } from "../types";

export interface EasyPeasyStore {
  todos: Todo[];
  todosCount: Computed<this, number>;
  todosCompleted: Computed<this, number>;
  addTodo: Action<this, Todo>;
  deleteTodo: Action<this, Todo>;
  toggleTodo: Action<this, Todo>;
  updateTodo: Action<this, Todo>;
}

const initialState = {
  todos: [
    {
      id: 1,
      title: "This is a todo example",
      completed: false
    },
    {
      id: 2,
      title: "This is another todo example",
      completed: false
    },
  ] as Todo[],
};

export const store = createStore<EasyPeasyStore>({
  
  ...initialState,

  todosCount: computed((state) => {
    return state.todos.length;
  }),

  todosCompleted: computed((state) => {
    const todoList = state.todos.filter((todo) => {
      return todo.completed === true
    });
    return todoList.length
  }),
  
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),

  deleteTodo: action((state, payload) => {
    state.todos = state.todos.filter(todo => todo.id !== payload.id);
  }),

  toggleTodo: action((state, payload) => {
    state.todos.map(todo => {
      if(todo.id === payload.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  }),

  updateTodo: action((state, payload) => {
    state.todos.map(todo => {
      if(todo.id !== payload.id) {
        return todo;
      } else {
        return todo.title = payload.title
      }
    })
  })
});
