import { useState } from "react";
import Button from "./Button.jsx";

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
        <Button
          handleClick={status}
          label="status"
        />
      </div>
    </>
  );
}

export default TaskForm;