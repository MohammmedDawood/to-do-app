import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo }) => {
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
          <button
            className="btn btn-success m-1"
            onClick={() => setShowTodoInfo(!showTodoInfo)}
          >
            <FontAwesomeIcon icon={faArrowCircleDown} />
          </button>
          <button className="btn btn-danger m-1">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </span>
      </div>
      {/* to do Description */}
      {showTodoInfo && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{todo.responsiblePerson}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{todo.status}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{todo.priority}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{todo.startDate}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{todo.deadLine}</h6>
            <p className="card-text">{todo.description}</p>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
