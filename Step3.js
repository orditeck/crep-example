import React, { useState } from "react";
import Hello from "./Hello";

export default () => {
  const [name, setName] = useState("React");

  return (
    <div>
      <Hello name={name} />
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setName("Keven")}>Je m'appelle Keven</button>
      <button onClick={() => setName("Dylan")}>Je m'appelle Dylan</button>
    </div>
  );
};
