import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "todo1",
      description: "create react project",
      deadLine: "2021-11-08",
      priority: "High",
      status: "In Progress",
      startDate: "2021-11-24",
      responsiblePerson: "Mohammed",
    },
    {
      id: 2,
      title: "todo2",
      description: "create react project",
      deadLine: "2021-11-08",
      priority: "High",
      status: "To Do",
      startDate: "2021-11-24",
      responsiblePerson: "Mohammed",
    },
    {
      id: 3,
      title: "todo3",
      description: "create react project",
      deadLine: "2021-11-08",
      priority: "High",
      status: "Done",
      startDate: "2021-11-24",
      responsiblePerson: "Ahmed",
    },
  ],
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
});

//export addTodo action
export const { addTodo, deleteTodo, changeStatus } = todoSlice.actions;

//export reducer
export default todoSlice.reducer;
