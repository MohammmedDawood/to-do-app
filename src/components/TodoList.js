import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = [
    {
      id: 1,
      title: "todo1",
      description: "create react project",
      deadLine: "2021-11-08",
      priority: "high",
      status: "toDo",
      startDate: "2021-11-24",
      responsiblePerson: "Mohammed",
    },
    {
      id: 2,
      title: "todo2",
      description: "create react project",
      deadLine: "2021-11-08",
      priority: "high",
      status: "toDo",
      startDate: "2021-11-24",
      responsiblePerson: "Mohammed",
    },
    {
      id: 3,
      title: "todo3",
      description: "create react project",
      deadLine: "2021-11-08",
      priority: "high",
      status: "toDo",
      startDate: "2021-11-24",
      responsiblePerson: "Ahmed",
    },
  ];

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
