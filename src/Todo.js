import { ListItem, List, ListItemText, ListItemAvatar } from "@mui/material";
import React from "react";
import "./Todo.css";
function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText
          primary={props.text}
          secondary="Complete it before Deadline⚡"
        />
      </ListItem>
    </List>
  );
}

export default Todo;
