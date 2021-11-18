import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, changeStatus } from "../redux/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faArrowCircleDown,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const deleteTodobtn = () => {
    console.log("delete");
    console.log(todo.id);
    // dispatch event to redux
    dispatch(
      deleteTodo({
        id: todo.id,
      })
    );
  };
  const ChangeStatusTodobtn = (statusvalue) => {
    console.log("Change Status");
    console.log(todo.id);
    // dispatch event to redux
    dispatch(
      changeStatus({
        id: todo.id,
        status: statusvalue,
      })
    );
  };

  const [showTodoInfo, setShowTodoInfo] = useState(false);
  return (
    <li className="list-group-item">
      {/* Todo Header */}
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center  m-1">
          <b>
            <h1>{todo.title}</h1>
          </b>
        </span>

        <span className="d-flex align-items-center">
          <select
            className="form-select mr-sm-1"
            defaultValue={todo.status}
            onChange={(event) => ChangeStatusTodobtn(event.target.value)}
          >
            <option>Choose Status...</option>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
          <button
            className={
              showTodoInfo ? "btn btn-danger m-1" : "btn btn-success m-1"
            }
            onClick={() => setShowTodoInfo(!showTodoInfo)}
          >
            <FontAwesomeIcon
              icon={showTodoInfo ? faArrowCircleUp : faArrowCircleDown}
            />
          </button>
          <button
            id={todo.id}
            className="btn btn-danger m-1"
            onClick={() => deleteTodobtn()}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </span>
      </div>
      {/* to do Description */}
      {showTodoInfo && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Responsible Person: {todo.responsiblePerson}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Status: {todo.status}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Priority: {todo.priority}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Start Date: {todo.startDate}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Deadline: {todo.deadLine}
            </h6>
            <p className="card-text">Description: {todo.description}</p>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
