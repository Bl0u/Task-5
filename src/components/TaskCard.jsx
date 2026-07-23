import Button from "./Button";
import "./TaskCard.css";
export function TaskCard({
  text,
  completed = false,
  onToggle,
  onDelete,
  status,
  id,
}) {
  return (
    <div className="task-card">
      <input type="checkbox" checked={completed} />

      <label>{text}</label>

      <Button
        label="toggle"
        handleClick={() => {
          onToggle(id);
          console.log("text: " + text + "complete: " + completed);
        }}
        />
      <Button
        label="remove"
        handleClick={() => {
            console.log("deleted id: " + id);
            onDelete(id);
            console.log("deleted text: " + text);
        }}
        />

      <Button handleClick={() => {
          status(id) ;
          console.log("text: " + text + "complete: " + completed);
      }} label="status" />
    </div>
  );
}

export default TaskCard;
