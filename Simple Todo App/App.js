import React, { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState(""); // String input instead of an array
  const [todos, setTodos] = useState([]);

  const addData = () => {
    if (userInput.trim()) { // Ensures no empty input
      setTodos([...todos, userInput]);
      setUserInput(""); // Clears the input after adding
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        onChange={(event) => setUserInput(event.target.value)} 
        value={userInput}
        type="text"
      />
      <button onClick={addData}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
