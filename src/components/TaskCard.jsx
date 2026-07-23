import Button from "./Button";
import "./TaskCard.css";
export function TaskCard({
  text,
  completed = false,
  onToggle,
  onDelete,
  status,
}) {
  return (
    <div className="task-card">
      <input type="checkbox" checked={completed} onChange={onToggle} />

      <label>{text}</label>

      <Button
        label="toggle"
        handleClick={() => {
          onToggle(text);
          console.log(text);
        }}
      />
      <Button
        label="remove"
        handleClick={() => {
          onDelete(text);
          console.log("deleted: " + text);
        }}
      />

      <Button handleClick={() => {
        status(text) ;
        console.log(typeof completed) ;
      }} label="status" />
    </div>
  );
}

export default TaskCard;
