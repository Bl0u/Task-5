import TaskReducer from "../Reducer/TaskReducer";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import { useContext, useReducer } from "react";
import {ThemeContext} from "../Context/ThemeContext.jsx";
import Button from "./Button.jsx";
import "./TaskBoard.css";

export function TaskBoard() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const taskStatus = (taskId) => {
    console.log(tasks.find((task) => task.id === taskId));
  };


  return (
    <>
      <div className={theme}>
        <span>To do List</span>
        <Button
          label="Toggle theme"
          handleClick={toggleTheme}
        ></Button>
        <TaskForm
          onAddTask={(text) => dispatch({ type: "ADD_TASK", text: text })}
        ></TaskForm>
        {tasks?.map((element, index) => {
          return (
            <TaskCard
              key={index}
              text={element.text}
              id={element.id}
              completed={element.completed}
              onToggle={() => dispatch({ type: "TOGGLE_TASK", id: element.id })}
              onDelete={() => dispatch({ type: "DELETE_TASK", id: element.id })}
              status={taskStatus}
            ></TaskCard>
          );
        })}
      </div>
    </>
  );
}

export default TaskBoard;
