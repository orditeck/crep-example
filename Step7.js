import React, { useState, useEffect } from "react";
import Hello from "./Hello";

export default () => {
  const [name, setName] = useState(localStorage.getItem("name") || "React");
  const [todos, setTodos] = useState(["Apprendre le JavaScript"]);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  const _onKeyDown = e => {
    if (e.key === "Enter") {
      setTodos([...todos, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div class="container py-2">
      <Hello name={name} />
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setName("Keven")}>Je m'appelle Keven</button>
      <button onClick={() => setName("Dylan")}>Je m'appelle Dylan</button>
      <hr />
      <p>
        Je m'appelle:
        <input
          type="text"
          class="form-control"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </p>
      <hr />
      <h1>Todolist</h1>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
      <p>
        Ajouter un élément:
        <input type="text" class="form-control" onKeyDown={_onKeyDown} />
      </p>
    </div>
  );
};
