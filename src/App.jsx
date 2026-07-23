import "./App.css";
import { useReducer } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskCard from "./components/TaskCard.jsx";
import TaskReducer from "./Reducer/TaskReducer.jsx";

function App() {
  const [tasks, dispatch] = useReducer(TaskReducer, []) ;


  const addTask = (taskText) => {
    dispatch({type: 'ADD_TASK', text: taskText}) ;
    console.log(tasks) ;
  };

  const taskStatus = (taskId) => {
    console.log(tasks.find(task => task.id === taskId)) ;
  };
  const toggleTask = (taskId) => {
    dispatch({type: 'TOGGLE_TASK', id: taskId})
  };
  const deleteTask = (taskId) => {
    // what to do when the user hit delete task
    console.log("lol ? "+ taskId);
    dispatch({type: "DELETE_TASK", id: taskId}) ;
  };

  return (
    <>
      <TaskForm onAddTask={addTask} />
      {tasks?.map((element, index) => {
        return (
          <TaskCard
            key={index}
            completed={element.completed}
            text={`${element?.text}`}
            onDelete={deleteTask}
            id={element?.id}
            onToggle={toggleTask}
            status={taskStatus}
          />
        )
      })}
    </>
  );
}

export default App;
