import React, { useState } from "react";
import Hello from "./Hello";

export default () => {
  const [name, setName] = useState("React");

  return (
    <div className="container py-2">
      <Hello name={name} />
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setName("Keven")}>Je m'appelle Keven</button>
      <button onClick={() => setName("Dylan")}>Je m'appelle Dylan</button>
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
    </div>
  );
};
