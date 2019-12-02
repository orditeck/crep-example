import React, { useState, useEffect } from "react";
import Hello from "./Hello";

export default () => {
  const [name, setName] = useState(localStorage.getItem("name") || "React");
  const [todos, setTodos] = useState(["Apprendre le JavaScript"]);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [name, todos]);

  const _onKeyDown = e => {
    if (e.key === "Enter") {
      addItem(e.target.value);
      e.target.value = "";
    }
  };

  const addItem = item => setTodos([...todos, item]);
  const removeItem = item => setTodos(todos.filter(todo => todo !== item));

  return (
    <div className="container py-2">
      <Hello name={name} />
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setName("Dylan")}>Je m'appelle Dylan</button>
      <button onClick={() => setName("Keven")}>Je m'appelle Keven</button>
      <hr />
      <p>
        Je m'appelle:
        <input
          type="text"
          className="form-control"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </p>
      <hr />
      <h1>Todolist</h1>
      <ul>
        {todos.map(todo => (
          <li>
            {todo}
            <button
              type="button"
              className="close"
              onClick={() => removeItem(todo)}
            >
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
      <p>
        Ajouter un élément:
        <input type="text" className="form-control" onKeyDown={_onKeyDown} />
      </p>
    </div>
  );
};
