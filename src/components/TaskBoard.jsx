import TaskReducer from "../Reducer/TaskReducer";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import { useContext, useEffect, useReducer, useState } from "react";
import {ThemeContext} from "../Context/ThemeContext.jsx";
import Button from "./Button.jsx";
import "./TaskBoard.css";

export function TaskBoard() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const taskStatus = (taskId) => {
    console.log(tasks.find((task) => task.id === taskId));
  };

  const [showCompleted, setShowCompleted] = useState(false) ;
  const toggleShowCompleted = () => {
    setShowCompleted(prev => {
      const flag = !prev ;
      console.log(flag) ;
      return flag ;
    }) ;
  }

  // useEffect(() => {
  //   console.log(showCompleted) ;
  // }, [showCompleted])

  const visibleTasks = showCompleted ? tasks:tasks.filter(prev => !prev.completed) ;
  return (
    <>
      <div className={theme}>
        <span>To do List</span>
        <Button
          label="Toggle theme"
          handleClick={toggleTheme}
        ></Button>
        <Button
        label={"Show Completed"}
        handleClick={toggleShowCompleted}
        >
        </Button>
        <TaskForm
          onAddTask={(text) => dispatch({ type: "ADD_TASK", text: text })}
        ></TaskForm>
        {visibleTasks.length === 0 && "No tasks yet — add one above!" }
        {visibleTasks.length !== 0 && visibleTasks?.map((element) => {
          return (
            <TaskCard
              key={element.id}
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
