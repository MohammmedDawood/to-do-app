import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "todo/getTodosAsync",
  async () => {
    const response = await fetch(
      "https://todo-app-react-travolic.herokuapp.com/todos"
    );
    if (response.status === 200) {
      const todos = await response.json();
      return { todos };
    }
  }
);
export const addTodoAsync = createAsyncThunk(
  "todo/addTodoAsync",
  async (payload) => {
    const response = await fetch(
      "https://todo-app-react-travolic.herokuapp.com/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    if (response.status === 200) {
      console.log(payload);
      const todos = await response.json();
      return { todos };
    }
  }
);
export const changeStatusTodoAsync = createAsyncThunk(
  "todo/changeStatusTodoAsync",
  async (payload) => {
    const response = await fetch(
      `https://todo-app-react-travolic.herokuapp.com/todos/${payload.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: payload.status }),
      }
    );
    if (response.status === 200) {
      console.log(payload);
      const todos = await response.json();
      return { todos };
    }
  }
);
export const deleteTodoAsync = createAsyncThunk(
  "todo/deleteTodoAsync",
  async (payload) => {
    const response = await fetch(
      `https://todo-app-react-travolic.herokuapp.com/todos/${payload.id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      console.log(payload);
      return { id: payload.id };
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  //define actions(reducer)
  reducers: {
    //Add new to to do where the action type and payload comes from the component
    //and the state is the current state
    addTodo: (state, action) => {
      const newTodo = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        deadLine: action.payload.deadLine,
        priority: action.payload.priority,
        status: action.payload.status,
        startDate: action.payload.startDate,
        responsiblePerson: action.payload.responsiblePerson,
      };
      //   console.log(newTodo);
      state.push(newTodo);
      //   console.log(state);
    },
    changeStatus: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].status = action.payload.status;
    },
    deleteTodo: (state, action) => {
      // deleteTodo is the action
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  // specify additional reducers for thunk apis
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      console.log("data Fetched successfully!");
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      console.log("data Added successfully!");
      state.push(action.payload.todos);
    },
    [changeStatusTodoAsync.fulfilled]: (state, action) => {
      console.log("data Status Changed successfully successfully!");
      const index = state.findIndex((todo) => {
        // console.log(action.payload.todos.id);
        // console.log(todo.id);
        return todo.id === action.payload.todos.id;
      });
      // console.log(index);
      state[index].status = action.payload.todos.status;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      console.log("data Deleted successfully successfully!");
      // console.log(todo.id);
      // console.log(action.payload.id);
      console.log((todo) => todo.id !== action.payload.id);
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

//export addTodo action
export const { addTodo, deleteTodo, changeStatus } = todoSlice.actions;

//export reducer
export default todoSlice.reducer;
