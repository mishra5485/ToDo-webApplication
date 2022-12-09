import React, { useEffect, useState } from "react";
import "./App.css";
import { InputLabel, FormControl, Input, Button } from "@mui/material";
import Todo from "./Todo";
import { db } from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  //when the app loads we need to listen the database for the todos list to get up in the react app comopnent
  useEffect(() => {
    //function written here will trigger when the app component loads for the first time because we passed an empty array in the dependency list
    // db.collection("todos").onSnapshot((snapshot) => {
    //   setTodos(snapshot.docs.map((doc) => doc.data().todo));
    //   console.log(snapshot.docs.map((doc) => doc.data()));
    // });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
    });
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Harsh Mishra Here⭐</h1>
      <form>
        <FormControl>
          <InputLabel>Write the TodoList🖋️</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          type="Submit"
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="success"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((val) => (
          <Todo text={val} />
        ))}
      </ul>
    </div>
  );
}

export default App;
