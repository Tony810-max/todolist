import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function HomePage() {
  const [value, setValue] = useState("");

  const [state, setState] = useState([]);
  const handleSubmit = () => {
    setState((prev) => [...prev, value]);
    setValue("");
  };
  console.log(state);

  return (
    <div className="container mt-3  gap-3">
      <div className="d-flex gap-3">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="w-100"
        />
        <Button onClick={handleSubmit}>Add</Button>
      </div>

      <ul>
        {state.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
