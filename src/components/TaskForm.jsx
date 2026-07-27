import { useState } from "react";
import Button from "./Button.jsx";
import "../Style/TaskForm.css" ;

export function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <Button
          handleClick={() => {
            onAddTask(task) ;
            setTask('') ;
          }}
          label="Submit"
        />

      </div>
    </>
  );
}

export default TaskForm;