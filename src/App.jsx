import "./App.css";
import { useContext, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { Button } from "./components/Button.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskCard from "./components/TaskCard.jsx";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, { task, completed: false }]);
    console.log(`added a task: ${tasks}`);
  };

  const taskStatus = (task) => {
    tasks?.forEach((element) => {
      console.log(typeof element.completed) ;
      if (element.task === task) {
        console.log(element.task + " " + element.completed);
      }
    });
  };
  const toggleTask = (task) => {
    setTasks((prev) => {
      return prev.map((element) => {
        console.log(element.task + " " + element.completed);
        if (element.task === task) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        console.log(element.task + " " + element.completed);

        return element;
      });
    });
  };
  const deleteTask = (task) => {
    // what to do when the user hit delete task
    setTasks((prev) => {
      return prev.filter((element) => element.task !== task);
    });
  };

  return (
    <>
      <TaskForm onAddTask={addTask} />
      {tasks?.map((element, index) => (
        <TaskCard
          key={index}
          completed={element.completed}
          text={`${element?.task}`}
          onDelete={deleteTask}
          onToggle={toggleTask}
          status={taskStatus}
        />
      ))}
    </>
  );
}

export default App;
