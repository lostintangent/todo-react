import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const DATA: Task[] = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);